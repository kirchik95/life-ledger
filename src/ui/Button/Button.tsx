import cn from 'classnames';

import s from './Button.module.css';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  theme?: 'primary' | 'secondary';
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
  const { children, className, theme = 'primary', disabled, onClick, ...otherProps } = props;

  const handleClick = () => {
    onClick?.();
  };

  return (
    <button
      className={cn(s.root, s[theme], className, {
        [s.disabled]: disabled,
      })}
      onClick={handleClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};
