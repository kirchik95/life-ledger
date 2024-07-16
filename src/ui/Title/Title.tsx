import cn from 'classnames';

import s from './Title.module.css';

type Size = 'xs' | 'sm' | 'md' | 'lg';
type As = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TitleProps {
  size?: Size;
  as?: As;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Title = ({ size = 'xs', children, className, onClick, as = 'h1' }: TitleProps) => {
  const Component = as;

  return (
    <Component className={cn(s.root, s[`root_${size}`], className)} onClick={onClick}>
      {children}
    </Component>
  );
};
