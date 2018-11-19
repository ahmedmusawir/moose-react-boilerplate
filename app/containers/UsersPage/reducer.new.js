/*
 *
 * UsersPage reducer
 *
 */
import { fromJS } from 'immutable';

import { LOAD_USERS_SUCCESS, LOAD_USERS, LOAD_USERS_ERROR } from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  userData: false,
});

function usersPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USERS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('userData', false);
    case LOAD_USERS_SUCCESS:
      return state
        .set('userData', action.users)
        .set('loading', false)
        .set('error', false);
    case LOAD_USERS_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default usersPageReducer;
