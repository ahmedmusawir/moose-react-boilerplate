/*
 *
 * UsersPage reducer
 *
 */
import { fromJS } from 'immutable';
import { LOAD_USERS_SUCCESS, LOAD_USERS, LOAD_USERS_ERROR } from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
  usersData: false,
});

function usersPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USERS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('usersData', false);
    case LOAD_USERS_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('usersData', action.users);
    case LOAD_USERS_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default usersPageReducer;
