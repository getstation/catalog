import React, { CSSProperties } from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, number } from '@storybook/addon-knobs';

import Image, { Images } from '@components/Image';

const styles: CSSProperties = {
  width: '42px',
  height: '42px',
  padding: '5px 5px 20px 20px',
  backgroundColor: 'white'
};

storiesOf('Components|Image', module)
  .addParameters({ options: { selectedPanel: 'storybook/Image' } })
  .add('Image from collection', () => (
    <Image image={select('icon', Object.values(Images) as Images[], Images.DESIGN)} size={number('size', 250)} />
  ))
  .add('Image from url', () => <Image image={text('icon', 'https://zeplin.io/img/favicon/228x228.png')} />)
  .add('Image in Recent', () => (
    <div style={styles}>
      <Image image={text('icon', 'https://zeplin.io/img/favicon/228x228.png')} />
    </div>
  ));
