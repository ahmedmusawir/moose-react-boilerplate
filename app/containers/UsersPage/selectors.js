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
  createSelector(selectUsersPageDomain, userState => userState.toJS());

// const makeSelectLoading = () =>
//   createSelector(selectUsersPageDomain, userState => userState.get('loading'));

// const makeSelectError = () =>
//   createSelector(selectUsersPageDomain, userState => userState.get('error'));

// const makeSelectUsers = () =>
//   createSelector(selectUsersPageDomain, userState => userState.get('userData'));

// export {
//   selectUsersPageDomain,
//   makeSelectUsers,
//   makeSelectLoading,
//   makeSelectError,
// };

export default makeSelectUsersPage;
