import React from 'react';
import { createUseStyles } from 'react-jss';

interface ModalContentProps {
  className?: string;
  children: JSX.Element | JSX.Element[] | string;
}

const useStyles = createUseStyles({
  root: {
    padding: '30px 40px 40px 40px',
  },
});

function ModalContent(props: ModalContentProps) {
  const classes = useStyles();
  return (
    <div className={`${classes.root} ${props.className}`}>
      {props.children}
    </div>
  );
}

export default ModalContent;
