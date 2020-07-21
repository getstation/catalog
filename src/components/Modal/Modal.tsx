import React from 'react';
import { createUseStyles } from 'react-jss';
import ModalHead from './ModalHead';
import ModalContent from './ModalContent';
import Colors from "../Colors";

interface ModalProps {
  children: JSX.Element | JSX.Element[];
  open: boolean;
  onClose: () => void;
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
    border: 'none',
    padding: 0,
  },
});

function Modal(props: ModalProps) {
  const classes = useStyles();
  const modalRef = React.useRef() as React.MutableRefObject<HTMLDialogElement>;

  React.useEffect(() => {
    if (modalRef.current) {
      if (props.open) {
        modalRef.current.showModal();
      }
      modalRef.current.addEventListener('close', () => {
        props.onClose();
      });
    }
  });

  if (!props.open) return null;

  return (
    <dialog className={classes.root} ref={modalRef}>
      {props.children}
    </dialog>
  );
}

Modal.Head = ModalHead; // eslint-disable-line functional/immutable-data
Modal.Content = ModalContent; // eslint-disable-line functional/immutable-data

export default Modal;
