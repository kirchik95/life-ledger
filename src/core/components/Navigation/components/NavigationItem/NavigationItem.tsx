import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import { Icon } from '@shared/Icon';

import s from './NavigationItem.module.css';

interface NavigationItemProps {
  url: string;
  children?: React.ReactNode;
  icon?: string;
  className?: string;
}

export const NavigationItem = ({ url, children, icon, className }: NavigationItemProps) => {
  return (
    <NavLink to={url} className={({ isActive }) => cn(s.root, className, { [s.active]: isActive })}>
      {icon && <Icon name={icon} className={s.icon} width={16} height={16} />}
      <span>{children}</span>
    </NavLink>
  );
};
