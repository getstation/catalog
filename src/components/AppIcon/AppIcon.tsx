import React from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

type AppIconProps = {
  className?: string;
  icon: string;
};

const useStyles = createUseStyles({
  AppIcon: {
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
      'Segoe UI Symbol',
    ],
    width: 'auto',
    height: 'auto',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

const AppIcon = (props: AppIconProps) => {
  const classes = useStyles(props);

  return (
    <div className={classNames(classes.AppIcon, props.className)}>
      <img className={classes.image} src={props.icon} alt={'App icon'} />
    </div>
  );
};

export default AppIcon;
