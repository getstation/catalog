import React from 'react';
import {storiesOf} from '@storybook/react';
import Shortcut, {Key} from "@components/Shortcut";
import {number} from "@storybook/addon-knobs";
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
  shortcut: {
    background: 'rgb(31, 32, 35)',
    padding: 25,
    borderRadius: 20
  },
  key: {
    color: 'rgb(215, 216, 219)',
    backgroundColor: 'rgb(80, 80, 84)',
    border: 'none'
  }
});

storiesOf('Components|Shortcut', module)
	.addParameters({ options: { selectedPanel: 'storybook/Shortcut' } })
  .add('Basic', () => (<Shortcut keys={[Key.COMMAND, 'E']}/>))
	.add('Examples', () => (
	  <div>
	  Key symbol: <Shortcut keys={Key.COMMAND} size={number('size', 25, { range: true, min: 10, max: 800, step: 1 })} />
	  Character: <Shortcut keys={'E'} size={number('size', 25, { range: true, min: 10, max: 800, step: 1 })} />
	  Multiple letters key: <Shortcut keys={Key.CTRL} size={number('size', 25, { range: true, min: 10, max: 800, step: 1 })} />
	  Multiple key shortcut: <Shortcut keys={[Key.COMMAND, Key.OPTION, 'i']} size={number('size', 25, { range: true, min: 10, max: 800, step: 1 })} />
	  Impossible shortcut: <Shortcut keys={[Key.COMMAND, Key.OPTION, Key.CONTROL, Key.SHIFT, '❤️', Key.SPACEBAR, 'poney']} size={number('size', 25, { range: true, min: 10, max: 800, step: 1 })} />
	  Keyboard arrows: <Shortcut keys={[Key.UP, Key.DOWN, Key.LEFT, Key.RIGHT]} size={number('size', 25, { range: true, min: 10, max: 800, step: 1 })} />
    </div>
	))
  .add('Custom', () => {
    const classes = useStyles();
    return (<Shortcut keys={[Key.COMMAND, 'K']} size={number('size', 25, { range: true, min: 10, max: 800, step: 1 })} className={classes.shortcut} keyClassName={classes.key} />);
  })
  .add('"or" separator', () => (<Shortcut keys={[Key.TAB, 'or', Key.SHIFT, Key.TAB]}/>));
