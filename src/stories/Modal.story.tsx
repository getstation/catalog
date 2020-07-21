import Modal from '@components/Modal';
import { storiesOf } from '@storybook/react';
import React from 'react';

storiesOf('Components|Modal', module)
  .addParameters({ options: { selectedPanel: 'storybook/Modal' } })
  .add(
    'Modal',
    () => (
      <Modal open={true}>
        <Modal.Head title="Manage Slack integration" onClose={() => null} />
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
      <Modal open={true}>
        <Modal.Head title="Manage Slack integration" onClose={() => null} />
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
