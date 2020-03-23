import React from 'react';
import classNames from 'classnames';
import { createUseStyles } from 'react-jss';
import AppIcon from '../AppIcon';
import Colors from '../Colors';

type AppItemProps = {
	icon: string;
	name: string;
	category: string;
	onClick: (e: string) => void;
	className?: string;
};

const useStyles = createUseStyles({
		AppItem: {
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
			display: 'flex',
			alignItems: 'center',
			border: 'none',
			padding: 0,
			backgroundColor: Colors.lightPrimaryBackgroundColor,
			height: 60,
			width: '100%',
			borderRadius: 30,
			outline: 'none',
			'&:hover, &:focus, &:active': {
				backgroundColor: Colors.lightTertiaryBackgroundColor
			},
			'&:focus:not(:hover)': {
				filter: 'brightness(0.9)', // TODO specify stytle for pressed state
			}
		},
		AppIcon: {
			height: 60,
			width: 60,
			'&>img': {
				padding: [15, 10, 15, 20],
				boxSizing: 'border-box'
			}
		},
		text: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'flex-start'
		},
		name: {
			color: Colors.lightPrimaryTextColor,
			fontSize: 14,
			fontWeight: 600
		},
		category: {
			color: Colors.lightSecondaryTextColor,
			fontSize: 12,
			marginTop: 2
		}
	});
const AppItem = (props: AppItemProps) => {
	const { icon, name, category, onClick, className } = props;
	const classes = useStyles();

	return (
		<button onClick={_ => onClick(name)} className={classNames(classes.AppItem, className)}>
			<AppIcon icon={icon} className={classes.AppIcon}/>
			<div className={classes.text}>
				<span className={classes.name}>{name}</span>
				<span className={classes.category}>{category}</span>
			</div>
		</button>
	);
};

export default AppItem;
