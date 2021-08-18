import { AUTH_IN, AUTH_LOGIN, CHANGE_LOADER } from '../actionTypes';

export const action = payload => ({ type: 'Action', payload });
export const changeLoader = payload => ({ type: CHANGE_LOADER, payload });
export const authLogin = payload => ({ type: AUTH_LOGIN, payload });
export const authIn = payload => ({ type: AUTH_IN, payload });
