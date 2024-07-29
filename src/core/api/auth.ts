import axios from 'axios';

import { User } from '@entities/User';

interface AuthResponse {
  user: User;
  token: string;
}

export const auth = {
  register: (data: Omit<User, 'id'>) =>
    axios.post<AuthResponse>('/auth/register', data).then((response) => response.data),
  signIn: (data: { email: string; password: string }) =>
    axios.post<AuthResponse>('/auth/sign-in', data).then((response) => response.data),
};
