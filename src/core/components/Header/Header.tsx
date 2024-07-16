import cn from 'classnames';

import { Container } from '@ui/Container';

import { Logo } from '@shared/Logo';

import { Navigation } from '../Navigation';

import s from './Header.module.css';

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn(s.root, className)}>
      <Container>
        <div className={s.content}>
          <Logo />
          <Navigation />
        </div>
      </Container>
    </header>
  );
};
