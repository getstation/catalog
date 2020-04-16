import React, {useState} from 'react';
import color from 'color';
import {storiesOf} from '@storybook/react';

import Colors from '@components/Colors';
import DropdownMenu from '@components/DropdownMenu';
import Icon, {Icons} from '@components/Icon';

import {createUseStyles} from 'react-jss';
import {action} from "@storybook/addon-actions";
import {boolean} from "@storybook/addon-knobs";
import {Images} from "@src/assets/images";
import Image from "@components/Image";
import Tooltip, {TooltipPositions} from "@components/Tooltip";

const items = [
  {
    icon: Icons.EDITOR,
    text: 'Rename workspace'
  },
  {
    icon: Icons.ARCHIVE,
    text: 'Archive workspace'
  }
];

const images = [
  {
    image: Images.ALL,
    text: 'All'
  },
  {
    image: Images.COMPANY,
    text: 'Company apps'
  }
];

const selectable = [
  { text: 'Recently added', selected: true },
  { text: 'Resource title' },
  { text: 'App name' },
];

const useStyle = createUseStyles({
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    outline: 'none',
    height: 25,
    fontSize: 14,
    letterSpacing: 0,
    whiteSpace: 'nowrap',
    paddingRight: '24px',
    color: Colors.lightPrimaryTextColor,
    '&:hover': {
      backgroundColor: Colors.lightTertiaryBackgroundColor
    },
  },
  icon: {
    minWidth: 12,
    padding: '6px 14px 6px 18px',
    '& svg': {
      position: 'relative',
      top: -2,
    }
  },
  sortButton: {
    height: 24,
    width: 96,
    color: Colors.lightPrimaryTextColor,
    fontSize: 14,
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '0 4px',
    borderRadius: 2,
    backgroundColor: Colors.lightSecondaryBackgroundColor,
    '&>:focus': {
      backgroundColor: Colors.lightTertiaryBackgroundColor,
    },
    '&>:last-child': {
      width: 7,
    }
  }
});

storiesOf('Components|DropdownMenu', module)
  .addParameters({ options: { selectedPanel: 'storybook/DropdownMenu' } })
  .add('Basic usage', () => (
    <DropdownMenu items={items} onSelect={action('onSelect')} closeOnSelect={boolean('close menu on select', true)}>
      <Icon icon={Icons.OPTIONS} size={25} color={Colors.lightPrimaryTextColor}/>
    </DropdownMenu>
  ))
  .add('Slotted childrens', () => {
    const classes = useStyle();
    return (
      <DropdownMenu closeOnSelect={boolean('close menu on select', false)}>{{
        trigger: <Icon icon={Icons.OPTIONS} size={25} color={Colors.lightPrimaryTextColor}/>,
        items: items.map((item, i) => (
          <li key={i} className={classes.item} onClick={_ => action('onSelectCustom')(item)}>
            <Icon icon={item.icon} color={color(Colors.lightPrimaryTextColor).fade(0.4).string()} size={14} className={classes.icon}/>
            <span>{item.text}</span>
          </li>
        ))
      }}</DropdownMenu>
    );
  })
  .add('Selectable behavior', () => {
    const classes = useStyle();
    const isMultiple = boolean('multiple choices', false);
    const [items, setItems] = useState(selectable);
    const choiceChanged = (e: any) => {
      action('onSelect')(e);
      setItems(items.map(i => {
        i.selected = i.selected ? (isMultiple && (i.text != e.text)) : (i.text == e.text);
        return i;
      }));
    };
    return (
      <DropdownMenu items={items} checkmark onSelect={choiceChanged} closeOnSelect={boolean('close menu on select', false)}>
        <div className={classes.sortButton}>
          <Icon icon={Icons.ARROWS_UP_DOWN} size={14} color={Colors.lightPrimaryTextColor}/>
          <span>Sort by</span>
          <Icon icon={Icons.DROPDOWN} size={14} color={Colors.lightPrimaryTextColor}/>
        </div>
      </DropdownMenu>
    )
  })
  .add('with tooltip/images', () => (
    <DropdownMenu items={images} onSelect={action('onSelect')}>
      <Tooltip text={'compatible with tooltip!'} styles={{position: TooltipPositions.TOP}}>
        <Image image={Images.CATEGORIZE}/>
      </Tooltip>
    </DropdownMenu>
  ))
  .add('just text', () => (
    <DropdownMenu items={[{text: 'fesse1'}, {text: 'fesse2'}]} onSelect={action('onSelect')}>
      <span>only text</span>
    </DropdownMenu>
  ));
