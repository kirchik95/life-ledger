import { useState } from 'react';

import { Button } from '@ui/Button';
import { Container } from '@ui/Container';
import { Modal } from '@ui/Modal';
import { Text } from '@ui/Text';
import { Title } from '@ui/Title';

import s from './Settings.module.css';

export const Settings = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={s.root}>
      <Container>
        <Title>Settings</Title>
        <div className={s.content}>
          <Button onClick={() => setShowModal(true)}>showModal</Button>
          <Modal showModal={showModal} setShowModal={setShowModal}>
            <Title>Modal Content</Title>
            <Text>This is a sample modal using framer-motion for animations.</Text>
            <button onClick={() => setShowModal(false)}>Close</button>
          </Modal>
        </div>
      </Container>
    </div>
  );
};
