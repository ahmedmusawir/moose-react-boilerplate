/*
 *
 * UsersPage actions
 *
 */

import { LOAD_USERS, LOAD_USERS_SUCCESS, LOAD_USERS_ERROR } from './constants';

/**
 * Load the usersitories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_USERS
 */
export function loadUsers() {
  return {
    type: LOAD_USERS,
  };
}

/**
 * Dispatched when the usersitories are loaded by the request saga
 *
 * @param  {array} users The usersitory data
 *
 * @return {object}      An action object with a type of LOAD_USERS_SUCCESS passing the users
 */
export function usersLoaded(users) {
  return {
    type: LOAD_USERS_SUCCESS,
    users,
  };
}

/**
 * Dispatched when loading the usersitories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_USERS_ERROR passing the error
 */
export function userLoadingError(error) {
  return {
    type: LOAD_USERS_ERROR,
    error,
  };
}
