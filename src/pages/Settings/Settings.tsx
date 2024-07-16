import { Container } from '@ui/Container';
import { Title } from '@ui/Title';

import s from './Settings.module.css';

export const Settings = () => {
  return (
    <div className={s.root}>
      <Container>
        <Title>Settings</Title>
      </Container>
    </div>
  );
};
