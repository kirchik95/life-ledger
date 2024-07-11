import s from './Button.module.scss';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  const { children, ...otherProps } = props;

  return (
    <button className={s.root} {...otherProps}>
      {children}
    </button>
  );
};
