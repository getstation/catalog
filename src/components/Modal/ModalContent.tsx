import React from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
import { StationTheme } from '../../design-system';

interface ModalContentProps {
  className?: string;
  children: JSX.Element | JSX.Element[] | string;
}

const useStyles = createUseStyles((theme: StationTheme) => ({
  root: {
    padding: '30px 40px 40px 40px',
  },
}));

function ModalContent(props: ModalContentProps) {
  const classes = useStyles();
  return (
    <div className={classNames(classes.root, props.className)}>
      {props.children}
    </div>
  );
}

export default ModalContent;
