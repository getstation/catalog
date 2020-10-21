import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import classNames from 'classnames';
import Icon, { Icons } from '../Icon';

import { StationTheme } from '../../design-system';

interface ModalHeadProps {
  title: string;
  onClose: () => void;
  className?: string;
}

const useStyles = createUseStyles((theme: StationTheme) => ({
  '@import': 'url(https://fonts.googleapis.com/css?family=Asap:400,500&display=swap&subset=latin-ext)',
  root: {
    display: 'flex',
    height: '80px',
    alignItems: 'center',
    padding: '0 40px',
    borderBottom: `solid 1px ${theme.color.backgroundSecondaryHover}`,
  },
  title: {
    fontFamily: 'Asap',
    fontSize: '20px',
    fontWeight: 500,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.35px',
    color: theme.color.textPrimaryDefault,
  },
  close: {
    display: 'flex',
    marginLeft: 'auto',
    cursor: 'pointer',
  },
}));

function ModalHead(props: ModalHeadProps) {
  const theme: any = useTheme();
  const classes = useStyles();
  return (
    <div className={classNames(classes.root, props.className)}>
      <div className={classes.title}>{props.title}</div>
      <Icon
        className={classes.close}
        onClick={props.onClose}
        icon={Icons.CROSS}
        size={14}
        color={theme.color.textPrimaryDefault}
      />
    </div>
  );
}

export default ModalHead;
