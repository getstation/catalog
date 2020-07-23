import React from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
import ModalHead from './ModalHead';
import ModalContent from './ModalContent';
import Colors from "../Colors";

interface ModalProps {
  children: JSX.Element | JSX.Element[];
  open: boolean;
  onClose: () => void;
  className?: string;
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
    margin: 0,
    '&::backdrop': {
      background: Colors.lightPrimaryBackgroundColor,
      opacity: 0.6,
    },
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
  }, [props.open]);

  if (!props.open) return null;

  return (
    <dialog className={classNames(classes.root, props.className)} ref={modalRef}>
      {props.children}
    </dialog>
  );
}

Modal.Head = ModalHead; // eslint-disable-line functional/immutable-data
Modal.Content = ModalContent; // eslint-disable-line functional/immutable-data

export default Modal;
