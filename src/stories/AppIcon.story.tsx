import React, { CSSProperties } from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import AppIcon from '@components/AppIcon';

const styles: CSSProperties = {
  width: '42px',
  height: '42px',
  padding: '5px 5px 20px 20px',
  backgroundColor: 'white',
};

storiesOf('Components|AppIcon', module)
  .addParameters({ options: { selectedPanel: 'storybook/AppIcon' } })
  .add('AppIcon', () => <AppIcon icon={text('icon', 'https://zeplin.io/img/favicon/228x228.png')} />)
  .add('AppIcon in Recent', () => (
    <div style={styles}>
      <AppIcon icon={text('icon', 'https://zeplin.io/img/favicon/228x228.png')} />
    </div>
  ));
