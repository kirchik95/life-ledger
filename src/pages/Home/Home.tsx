import { Container } from '@ui/Container';
import { Title } from '@ui/Title';

import s from './Home.module.css';

export const Home = () => {
  return (
    <div className={s.root}>
      <Container>
        <Title>Home</Title>
      </Container>
    </div>
  );
};
