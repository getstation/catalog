import React from 'react';
import { createUseStyles } from 'react-jss';
import ModalHead from './ModalHead';
import ModalContent from './ModalContent';
import Colors from "../Colors";

interface ModalProps {
  children: JSX.Element | JSX.Element[];
  open: boolean;
  onEscKey?: () => void;
}

const useStyles = createUseStyles({
  root: {
    width: '400px',
    background: Colors.lightPrimaryBackgroundColor,
    borderRadius: '10px',
    boxShadow: '0 0 24px 0 rgba(0, 0, 0, 0.12)',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '1100',
  },
  dimmer: {
    position: 'absolute',
    top: '0',
    background: Colors.lightPrimaryBackgroundColor,
    opacity: '0.8',
    width: '100vw',
    height: '100vh',
    zIndex: '1000',
  },
});

function Modal(props: ModalProps) {
  const classes = useStyles();
  const modalRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  React.useEffect(() => {
    if (modalRef.current) {
      modalRef.current.focus();
    }
  });

  if (!props.open) return null;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && props.onEscKey) {
      props.onEscKey();
    }
  };

  return (
    <>
      <div className={classes.dimmer} />
      <div className={classes.root} tabIndex={0} onKeyDown={handleKeyDown} ref={modalRef}>
        {props.children}
      </div>
    </>
  );
}

Modal.Head = ModalHead; // eslint-disable-line functional/immutable-data
Modal.Content = ModalContent; // eslint-disable-line functional/immutable-data

export default Modal;
