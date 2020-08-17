import React from 'react';
import color from 'color';
import classNames from 'classnames';
import {createUseStyles} from 'react-jss';
import Image from "../Image";
import Colors from '../Colors';
import Icon, {Icons} from '../Icon';
import {DropdownMenuStyles, DropdownMenuProps} from './index';

const useStyles = createUseStyles({
  root: {
    position: 'relative',
    margin: (styles: DropdownMenuStyles) => styles?.margin || 0,
    padding: (styles: DropdownMenuStyles) => styles?.padding || 0,
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    '&:focus $items': {
      display: 'flex',
      opacity: 1,
      transform: 'scale(1)',
    }
  },
  items: {
    opacity: 0,
    flexDirection: 'column',
    position: 'absolute',
    overflow: 'hidden',
    margin: 0,
    top: (styles: DropdownMenuStyles) => `calc(100% + ${styles?.space || 2}px)`,
    left: 0,
    padding: (styles: DropdownMenuStyles) => styles?.items?.padding || '5px 0',
    backgroundColor: Colors.lightSecondaryBackgroundColor,
    border: ['solid', 0.5, '#cfd6db'],
    borderRadius: 6,
    transform: 'scale(0)',
    transformOrigin: [0, 0],
    transitionDuration: (styles: DropdownMenuStyles) => styles?.duration || '100ms',
  },
  item: {
    height: 25,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    outline: 'none',
    fontSize: 14,
    letterSpacing: 0,
    whiteSpace: 'nowrap',
    padding: [0, 18],
    color: Colors.lightPrimaryTextColor,
    '&:hover': {
      backgroundColor: Colors.lightSecondaryHoverBackgroundColor
    }
  },
  icon: {
    minWidth: 12,
    padding: '6px 14px 6px 0',
    '& svg': {
      position: 'relative',
      top: -2,
    }
  },
  image: {
    padding: 5,
  },
  selectIcon: {
    height: 25,
    width: 20,
    '& svg': {
      boxSizing: 'border-box',
      padding: 5,
    }
  },
  unchecked: {
    height: 25,
    width: 20,
  },
  opened: {
    display: 'flex',
    opacity: 1,
    transform: 'scale(1)',
  },
  selected: {
    backgroundColor: Colors.lightSecondaryHoverBackgroundColor
  }
});

const DropdownMenu = ({ children,
                        items,
                        styles,
                        checkmark = false,
                        closeOnSelect = false,
                        opened,
                        selected,
                        onSelect,
                        className,
                        itemClassName,
                        listClassName }: DropdownMenuProps) => {
  const classes = useStyles(styles);
  return (
    <button className={classNames(classes.root, className)}>
      {children?.trigger || children}
      <ul className={classNames(classes.items, listClassName, opened && classes.opened)}>{items ? items.map(item =>
        <li key={item.text} className={classNames(classes.item, itemClassName, selected?.text === item.text && classes.selected)} onMouseDown={_ => onSelect && onSelect(item)} tabIndex={closeOnSelect ? 1 : undefined}>
          {checkmark && (item.selected
            ? <Icon icon={Icons.CHECKMARK} size={12} color={Colors.lightPrimaryTextColor} className={classes.selectIcon}/>
            : <div className={classes.unchecked}/>
          )}
          {item.icon && <Icon className={classes.icon} icon={item.icon} color={color(Colors.lightPrimaryTextColor).fade(0.4).string()} size={12}/>}
          {item.image && <Image className={classes.image} image={item.image} size={20}/>}
          <span>{item.text}</span>
        </li>
      ) : children?.items}</ul>
    </button>
  );
};

export default DropdownMenu;
