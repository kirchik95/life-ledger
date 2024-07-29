import { RootState } from '@core/redux/store';

const getAuthState = (state: RootState) => state.auth;

export const getAuthIsAuthenticatedSelector = (state: RootState) => getAuthState(state).isAuthenticated;

export const getAuthUserStateSelector = (state: RootState) => getAuthState(state).user;
