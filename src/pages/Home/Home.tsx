import cn from 'classnames';

import s from './Home.module.css';

interface HomeProps {
  className?: string;
}

export const Home = ({ className }: HomeProps) => {
  return <div className={cn(s.root, className)}></div>;
};
