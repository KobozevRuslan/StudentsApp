import { CHANGE_LOADER, CHANGE_TAB } from '../actionTypes';
import { initialState } from '../data/temporaryObject';

export default function appReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'Action':
      return { ...state, loading: true };
    case CHANGE_TAB:
      return { ...state };
    case CHANGE_LOADER:
      return { ...state, loading: payload };
    default:
      return state;
  }
}
