/**
 * UsersPage Sagas
 */
import { takeLatest, call, put, select } from 'redux-saga/effects';
import { LOAD_USERS } from 'containers/UsersPage/constants';
import { usersLoaded, userLoadingError } from 'containers/UsersPage/actions';
import axios from 'axios';

// import request from 'utils/request';

export function* getUsers() {
  // Select username from store
  const requestURL = 'http://128.199.122.47:3001/users';

  try {
    // Call our request helper (see 'utils/request')
    // const users = yield call(request, requestURL);
    const users = yield axios.get(requestURL);
    // console.log(users);

    yield put(usersLoaded(users.data));
  } catch (err) {
    yield put(userLoadingError(err));
  }
}

// Individual exports for testing
export default function* usersPageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOAD_USERS, getUsers);
}
