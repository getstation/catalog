import React from 'react';
import {createUseStyles} from "react-jss";
import { storiesOf } from '@storybook/react';
import {text, select, boolean} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import ListItem from '@components/ListItem';
import Icon, {Icons} from "@components/Icon";
import Colors from "@components/Colors";
import Tooltip from "@components/Tooltip";

const types = {
  tab: 'TAB',
  none: undefined,
};

const useStyle = createUseStyles({
  icon: {
    '&:hover': {
      backgroundColor: Colors.lightTertiaryBackgroundColor,
    },
    alignSelf: 'center',
    height: 12,
    width: 12,
    padding: 4,
    borderRadius: 20,
    '&> svg': {
      display: 'block',
      width: 12,
      height: 12,
    }
  }
})

storiesOf('Components|ListItem', module)
  .addParameters({ options: { selectedPanel: 'storybook/ListItem' } })
  .add(
    'Recent',
    () => (
      <ListItem
        isRecent
        favIconUrl={text('favIconUrl', 'https://zeplin.io/img/favicon/228x228.png')}
        title={text('title', 'pages/recents/results - Station 2.0 - Zeplin')}
        subtitle={text('appName', 'Zeplin')}
        type={select('type', types, types.tab)}
        url={'app.zeplin.io'}
        onClick={e => action('onListItemClicked')(e)}
      />
    ),
    {
      centered: { disable: true },
    },
  )
  .add(
    'Result (Quick Switch)',
    () => (
      <ListItem
        favIconUrl={text('favIconUrl', 'https://zeplin.io/img/favicon/228x228.png')}
        title={text('title', 'pages/recents/results - Station 2.0 - Zeplin')}
        subtitle={text('subtitle', 'Zeplin')}
        type={select('type', types, types.tab)}
        url={'app.zeplin.io'}
        onClick={e => action('onListItemClicked')(e)}
      />
    ),
    {
      centered: { disable: true },
    },
  )
  .add(
    'Alternative',
    () => (
      <ListItem
        isRecent
        title={text('title', 'New Tab (Home)')}
        subtitle={text('appName', 'Chrome')}
        type={select('type', types, types.none)}
        url={'https://google.com/'}
        onClick={e => action('onListItemClicked')(e)}
      />
    ),
    {
      centered: { disable: true },
    },
  )
  .add(
    'Alternative (quick switch)',
    () => (
      <ListItem
        title={text('title', 'New Tab (Home)')}
        subtitle={text('appName', 'Chrome')}
        type={select('type', types, types.tab)}
        url={'https://google.com/'}
        onClick={e => action('onListItemClicked')(e)}
      />
    ),
    {
      centered: { disable: true },
    },
  )
  .add(
    'with children (teamhub)',
    () => (
      <ListItem
        favIconUrl={text('favIconUrl', 'https://zeplin.io/img/favicon/228x228.png')}
        title={text('title', 'Slack URLs Integrations')}
        subtitle={text('appName', 'Notion')}
        isTeamhub={boolean('isTeamhub', true)}
        type={select('type', types, types.tab)}
        url={'https://google.com/'}
        onClick={e => action('onListItemClicked')(e)}
      >
        <Tooltip text={'Copy link'} styles={{space: -12, margin: '0 7px 0 0', text: {size: 10}}}>
          <Icon icon={Icons.LINK} color={Colors.lightPrimaryTextColor} className={useStyle().icon} onClick={action('Copy link clicked')}/>
        </Tooltip>
        <Tooltip text={'Edit resource'} styles={{space: -12, margin: '0 7px 0 0', text: {size: 10}}}>
          <Icon icon={Icons.EDITOR} color={Colors.lightPrimaryTextColor} className={useStyle().icon} onClick={action('Edit resource clicked')}/>
        </Tooltip>
        <Tooltip text={'Delete resource'} styles={{space: -12, margin: '0 16px 0 0', text: {size: 10}}}>
          <Icon icon={Icons.TRASH} color={Colors.lightPrimaryTextColor} className={useStyle().icon} onClick={action('Delete resource clicked')}/>
        </Tooltip>
      </ListItem>
    ),
    {
      centered: { disable: true },
    },
  );
