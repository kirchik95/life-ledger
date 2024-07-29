import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { signIn } from './actions';
import { InitialState, SignInPayload } from './types';

const initialState: InitialState = {
  isLoading: false,
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled, (state, action: PayloadAction<SignInPayload>) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
      });
  },
});

export const { actions: authActions, reducer: auth } = authSlice;
