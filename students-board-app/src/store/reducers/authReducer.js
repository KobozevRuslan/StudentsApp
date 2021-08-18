import { AUTH_IN } from '../actionTypes';

const initialState = {
  isAuthorised: false,
};

export default function authReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case AUTH_IN:
      return { ...state, isAuthorised: payload };
    default:
      return state;
  }
}
