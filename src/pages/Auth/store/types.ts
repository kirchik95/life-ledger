import { User } from '@entities/User';

export type InitialState = {
  isLoading: boolean;
  isAuthenticated: boolean;
  user: User | null;
};

export type SignInParams = {
  email: string;
  password: string;
};

export type SignInPayload = {
  user: User;
  token: string;
};
