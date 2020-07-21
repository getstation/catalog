import Modal from '@components/Modal';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { action } from '@storybook/addon-actions';

storiesOf('Components|Modal', module)
  .addParameters({ options: { selectedPanel: 'storybook/Modal' } })
  .add(
    'Modal',
    () => (
      <Modal open={true} onClose={action('close modal')}>
        <Modal.Head title="Manage Slack integration" onClose={action('close modal')} />
        <Modal.Content>Hello</Modal.Content>
      </Modal>
    ),
    {
      centered: { disable: true },
    },
  )
  .add(
    'Modal Overrided',
    () => (
      <Modal open={true} onClose={action('close modal')}>
        <Modal.Head title="Manage Slack integration" onClose={action('close modal')} />
        <Modal.Content className="additional_class">Hello</Modal.Content>
      </Modal>
    ),
    {
      centered: { disable: true },
    },
  )
  .add(
    'Modal interactive',
    () => {
      const [modalState, setModalState] = React.useState(false);
      const handleClose = () => setModalState(false);
      return (
        <div>
          <button onClick={() => setModalState(true)}>open modal</button>
          <Modal open={modalState} onClose={handleClose}>
            <Modal.Head title="Manage Slack integration" onClose={handleClose} />
            <Modal.Content>Hello</Modal.Content>
          </Modal>
        </div>
      );
    },
    {
      centered: { disable: true },
    },
  );
