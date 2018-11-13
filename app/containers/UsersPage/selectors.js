import { createSelector } from 'reselect';
import { List } from 'immutable';

const selectUsersPage = state => state.get('usersPage');

const makeSelectUsers = () =>
  createSelector(selectUsersPage, usersState => {
    const users = usersState.get('users');
    if (List.isList(users)) {
      return users.toJS();
    }

    return users;
  });

const makeSelectUser = () =>
  createSelector(selectUsersPage, usersState => usersState.get('user'));

export { selectUsersPage, makeSelectUsers, makeSelectUser };
