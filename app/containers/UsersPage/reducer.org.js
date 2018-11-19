/*
 *
 * UsersPage reducer
 *
 */
import { fromJS } from 'immutable';
import {
  LOAD_USERS_SUCCESS,
  LOAD_USERS,
  LOAD_USERS_ERROR,
  DEFAULT_ACTION,
} from './constants';

export const initialState = fromJS({});

function usersPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default usersPageReducer;
