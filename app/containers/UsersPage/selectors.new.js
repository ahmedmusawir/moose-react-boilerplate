import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the usersPage state domain
 */

const selectUsersPageDomain = state => state.get('usersPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by UsersPage
 */

const makeSelectUsersPage = () =>
  createSelector(selectUsersPageDomain, substate => substate.toJS());

const makeSelectLoading = () =>
  createSelector(selectUsersPageDomain, substate => substate.get('loading'));

const makeSelectError = () =>
  createSelector(selectUsersPageDomain, substate => substate.get('error'));

const makeSelectUsers = () =>
  createSelector(selectUsersPageDomain, substate => substate.get('userData'));

export {
  selectUsersPageDomain,
  makeSelectUsers,
  makeSelectLoading,
  makeSelectError,
};
export default makeSelectUsersPage;
