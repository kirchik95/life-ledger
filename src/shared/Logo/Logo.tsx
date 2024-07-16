import { Link } from 'react-router-dom';
import cn from 'classnames';

import s from './Logo.module.css';

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn(s.root, className)}>
      <Link to="/">Life Ledger</Link>
    </div>
  );
};
