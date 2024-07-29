import { NavLink } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import cn from 'classnames';

import { Button } from '@ui/Button';
import { Container } from '@ui/Container';
import { Input } from '@ui/Input';
import { Text } from '@ui/Text';
import { Title } from '@ui/Title';

import { useAppDispatch } from '@core/redux/hooks';

import { signIn } from '@pages/Auth/store/actions';

import s from './Auth.module.css';

interface AuthProps {
  className?: string;
}

type FormInput = {
  email: string;
  password: string;
};

export const Auth = ({ className }: AuthProps) => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    await dispatch(signIn(data));
  };

  return (
    <div className={cn(s.root, className)}>
      <Container>
        <div className={s.wrapper}>
          <Title className={s.title}>Log in to your account</Title>
          <Text className={s.info}>Welcome back! Please enter your details.</Text>

          <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <Input
              className={s.inputWrapper}
              title="Email"
              placeholder="Enter your email"
              {...register('email', { required: true })}
            />
            <Input
              className={s.inputWrapper}
              title="Password"
              type="password"
              placeholder="Enter your password"
              {...register('password', { required: true })}
            />

            <NavLink className={s.link} to="/auth">
              Forgot password
            </NavLink>

            <Button className={s.button} type="submit">
              Sign in
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};
