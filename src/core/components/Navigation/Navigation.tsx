import cn from 'classnames';

import { NavigationItem } from './components/NavigationItem';

import s from './Navigation.module.css';

interface NavigationProps {
  className?: string;
}

export const Navigation = ({ className }: NavigationProps) => {
  return (
    <div className={cn(s.root, className)}>
      <NavigationItem url="/" icon="home">
        Home
      </NavigationItem>
      <NavigationItem url="/settings" icon="settings">
        Settings
      </NavigationItem>
    </div>
  );
};
