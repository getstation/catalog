import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import AppIcon from '@components/AppIcon';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	recent: {
		width: 42,
		minWidth: 42,
		marginRight: 5,
		padding: [5, 5, 20, 20],
		boxSizing: 'border-box',
		backgroundColor: 'blue'
	},
	quickSwitch: {
		width: 72,
		minWidth: 72,
		marginRight: 'inherit',
		padding: [17, 20, 16, 32],
		boxSizing: 'border-box',
		backgroundColor: 'blue'
	}
});

storiesOf('Components|AppIcon', module)
  .addParameters({ options: { selectedPanel: 'storybook/AppIcon' } })
  .add('AppIcon', () => <AppIcon icon={text('icon', 'https://zeplin.io/img/favicon/228x228.png')} />)
  .add('AppIcon in Recent', () => {
		const classes = useStyles();
  	return (<AppIcon icon={text('icon', 'https://zeplin.io/img/favicon/228x228.png')} className={classes.recent} />);
	})
	.add('AppIcon in Quick-switch', () => {
		const classes = useStyles();
		return (<AppIcon icon={text('icon', 'https://zeplin.io/img/favicon/228x228.png')} className={classes.quickSwitch} />);
	});
