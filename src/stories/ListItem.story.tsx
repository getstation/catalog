import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import ListItem from '@components/ListItem';

const types = {
  tab: 'TAB',
  none: undefined,
};

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
  );
