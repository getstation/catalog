import React from 'react';
import { storiesOf } from '@storybook/react';
import Radio, { Choice } from '@components/Radio/Radio';

const choices: Choice[] = [
  {
    id: 'Yes',
    text: 'Use Station in the New Tab',
    value: true
  },
  {
    id: 'No',
    text: 'Show the default browser page',
    value: false
  },
];

storiesOf('Components|Radio', module)
  .addParameters({ options: { selectedPanel: 'storybook/Radio' } })
  .add('Radio', () => {
    const [selected, setSelected] = React.useState<Choice>(choices[0]);
    return (
      <Radio name={'newTab'} choices={choices} selected={selected} onSelect={choice => setSelected(choice)}/>
    );
  });
