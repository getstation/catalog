import React from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
import Icon, { Icons } from '../Icon';
import Colors from "../Colors";

interface ModalHeadProps {
  title: string;
  onClose: () => void;
  className?: string;
}

const useStyles = createUseStyles({
  '@import': 'url(https://fonts.googleapis.com/css?family=Asap:400,500&display=swap&subset=latin-ext)',
  root: {
    display: 'flex',
    height: '80px',
    alignItems: 'center',
    padding: '0 40px',
    borderBottom: `solid 1px ${Colors.lightSecondaryHoverBackgroundColor}`,
  },
  title: {
    fontFamily: 'Asap',
    fontSize: '20px',
    fontWeight: 500,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.35px',
    color: Colors.lightPrimaryTextColor,
  },
  close: {
    display: 'flex',
    marginLeft: 'auto',
    cursor: 'pointer',
  },
});

function ModalHead(props: ModalHeadProps) {
  const classes = useStyles();
  return (
    <div className={classNames(classes.root, props.className)}>
      <div className={classes.title}>{props.title}</div>
      <Icon
        className={classes.close}
        onClick={props.onClose}
        icon={Icons.CROSS}
        size={14}
        color={Colors.lightPrimaryTextColor}
      />
    </div>
  );
}

export default ModalHead;
