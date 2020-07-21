import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { createUseStyles } from 'react-jss';

import Colors from '@components/Colors';
import Button from '@components/Button';
import Image, { Images } from '@components/Image';
import Icon, { Icons } from '@components/Icon';
import Tooltip from '@components/Tooltip';
import DropdownMenu from '@components/DropdownMenu';

const appStyles = createUseStyles({
  button:{
    width: 265
  },
  buttonWrapped: {
    cursor: 'pointer',
    display: 'inline-flex',
    width: 'auto'
  },
  custom: {
    width: 420,
    justifyContent: 'space-between',
    padding: [0, 10, 0, 0],
  },
  workspace: {
    width: 190,
    justifyContent: 'space-between',
  }
});


storiesOf('Components|Button', module)
  .addParameters({ options: { selectedPanel: 'storybook/Button' } })
  .add('Simple (without icon)', () => {
    const style = appStyles();
     return (<Button
      text={text('text', 'Zeplin')}
      onClick={e => action('onButtonClicked')(e)}
      variant="secondary"
      className={style.buttonWrapped}
    />)
  },
  {
    centered: { disable: true },
  })
  .add('Application (Team hub)', () => {
    const style = appStyles();
     return (<Button
      icon={text('icon', 'https://zeplin.io/img/favicon/228x228.png')}
      text={text('text', 'Zeplin')}
      subtext={text('subtext', "Design & Creativity")}
      selected={boolean('selected', false)}
      onClick={e => action('onButtonClicked')(e)}
      className={style.button}
    />)
  },
  {
    centered: { disable: true },
  })
  .add('Application (AppStore minified)', () => {
      const style = appStyles();
      return (<Button
        icon={text('icon', 'https://zeplin.io/img/favicon/228x228.png')}
        text={text('text', 'Zeplin')}
        subtext={text('subtext', "Design & Creativity")}
        selected={boolean('selected', false)}
        onClick={e => action('onButtonClicked')(e)}
        className={style.button}
      >
        <Icon icon={Icons.PLUS}/>
      </Button>)
    },
  {
    centered: { disable: true },
  })
  .add('Category (Team hub)', () => (
      <Button
        icon={text('icon', Images.CATEGORIZE)}
        text={text('text', 'Internal Tools')}
        subtext={text('subtext', '')}
        selected={boolean('selected', false)}
        onClick={e => action('onButtonClicked')(e)}
      />
    ),
    {
      centered: { disable: true },
    })
  .add('Workspace (Team hub)', () => (
    <Button onClick={e => action('onButtonClicked')(e)} className={appStyles().workspace} icon={Images.LIKE} text={'Station team'}>
      <DropdownMenu items={[{text: 'option one'}, {text: 'option two'}]} styles={{space: 10, margin: '0 10px 0 auto'}}>
        <Icon icon={Icons.OPTIONS} color={Colors.lightPrimaryTextColor}/>
      </DropdownMenu>
    </Button>
  ))
  .add('With slotted childrens', () => (
      <Button onClick={e => action('onButtonClicked')(e)} className={appStyles().custom}>{{
        left: <Tooltip text={'This is custom right content'}>
                <Image image={Images.PROFILE_DEFAULT}/>
              </Tooltip>,
        main: <span>GrandMasterFesse</span>,
        right: <DropdownMenu items={[{text: 'option one'}, {text: 'option two'}]}>
                <Icon icon={Icons.PLUS}/>
              </DropdownMenu>,
      }}</Button>
    ));
