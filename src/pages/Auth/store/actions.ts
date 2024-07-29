import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '@core/api';

import { SignInParams, SignInPayload } from './types';

export const signIn = createAsyncThunk<SignInPayload, SignInParams, { rejectValue: string }>(
  'auth/signIn',
  async (data, thunkApi) => {
    try {
      const response = await api.auth.signIn(data);

      return { user: response.user, token: response.token };
    } catch (error) {
      return thunkApi.rejectWithValue('Something went wrong');
    }
  },
);
