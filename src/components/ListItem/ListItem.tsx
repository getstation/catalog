import classNames from 'classnames';
import React from 'react';
import color from 'color';
import { createUseStyles } from 'react-jss';
import Icon, { Icons } from '../Icon';
import Image from '../Image';
import Colors from '../Colors';
import fallback from './favicon-placeholder.svg';

type ListItemProps = {
  onClick: (e: string) => void;
  className?: string;
  favIconUrl?: string | null;
  title: string;
  url: string;
  subtitle: string;
  type?: string;
  isRecent?: boolean;
  isSelected?: boolean;
};

const useStyles = (isRecent: boolean) =>
  createUseStyles({
    ListItem: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol'
      ],
      width: '100%',
      height: isRecent ? 42 : 53,
      backgroundColor: Colors.lightPrimaryBackgroundColor,
      listStyle: 'none',
      display: 'flex',
      outline: 'none',
      '&:hover, &:focus, &:active': {
        backgroundColor: Colors.lightPrimaryHoverBackgroundColor
      },
      '&:focus:not(:hover), &.selected': {
        backgroundColor: Colors.lightPrimaryFocusBackgroundColor,
        '& $title': {
          maxWidth: '100%'
        },
        '&>$icon': {
          visibility: 'inherit',
          display: 'flex',
          alignItems: 'center'
        },
        '&>$arrow': {
          visibility: 'hidden',
          display: 'none'
        }
      }
    },
    item: {
      padding: [3, 0],
      fontSize: 12,
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'nowrap',
      justifyContent: `space-${isRecent ? 'around' : 'evenly'}`,
      alignItems: 'flex-start',
      flexGrow: 1,
      overflow: 'hidden'
    },
    appIcon: {
      width: isRecent ? 42 : 72,
      minWidth: isRecent ? 42 : 72,
      marginRight: isRecent ? 5 : 'inherit',
      padding: isRecent ? [5, 5, 20, 20] : [17, 20, 16, 32],
      boxSizing: 'border-box'
    },
    title: {
      color: Colors.lightPrimaryTextColor,
      fontSize: isRecent ? 12 : 13,
      fontWeight: isRecent ? 'normal' : 'bold',
      fontStyle: 'normal',
      letterSpacing: 0,
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      maxWidth: '95%'
    },
    appName: {
      color: Colors.lightSecondaryTextColor,
      fontSize: isRecent ? 10 : 11,
      fontWeight: 600,
      fontStyle: 'normal',
      letterSpacing: 0,
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      maxWidth: '70%',
      '&>a': {
        fontSize: 10,
        fontWeight: 'normal',
        fontStyle: 'italic',
        letterSpacing: 0,
        color: Colors.lightPrimaryLinkColor,
        textDecoration: 'none',
        outline: 'none'
      }
    },
    icon: {
      display: 'none',
      visibility: 'hidden',
      marginRight: isRecent ? 20 : 30,
      marginLeft: 10
    },
    arrow: {
      display: 'inherit',
      visibility: 'inherit',
      marginRight: isRecent ? 20 : 30,
      marginLeft: 10
    },
    arrowIcon: {
      width: 8
    },
    returnKey: {
      display: 'flex',
      border: [1, 'solid', color(Colors.lightPrimaryTextColor).fade(0.8).string()],
      borderRadius: 2,
      width: 10,
      height: 10,
      padding: 3
    }
  });
const ListItem = (props: ListItemProps) => {
  const { url, favIconUrl, isRecent = false, type, title, subtitle, onClick, isSelected } = props;
  const classes = useStyles(isRecent)();
  const className = classNames(classes.ListItem, { selected: isSelected });

  return (
    <li title={url} className={className} onClick={() => onClick(url)} tabIndex={-1}>
      <Image image={favIconUrl || fallback} className={classes.appIcon} />
      <div className={classes.item}>
        <span className={classes.title}>{title}</span>
        <span className={classes.appName}>
          {subtitle}
          {isRecent && type === 'TAB' && (
            <a href={url} tabIndex={-1} onClick={(e) => e.preventDefault()}>
              {' - open'}
            </a>
          )}
        </span>
      </div>
      <div className={classes.icon}>
        <Icon icon={Icons.RETURN_KEY} color={Colors.lightSecondaryTextColor} className={classes.returnKey} />
      </div>
      {!isRecent && type === 'TAB' && (
        <div className={classes.arrow}>
          <Icon icon={Icons.ARROW_UP_LEFT} className={classes.arrowIcon} />
        </div>
      )}
    </li>
  );
};

export default ListItem;
