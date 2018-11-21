/**
 * HomeDcPage Sagas
 */
import { takeLatest, call, put, select } from 'redux-saga/effects';
import { LOAD_HOMEDC } from 'containers/HomeDcPage/constants';
import {
  homeDataLoaded,
  homeDataLoadingError,
} from 'containers/HomeDcPage/actions';
import axios from 'axios';

export function* getHomeData() {
  // Select username from store
  const requestURL = 'http://128.199.122.47:3002/home';

  try {
    // Call our request helper (see 'utils/request')
    // const users = yield call(request, requestURL);
    const home = yield axios.get(requestURL);
    // console.log(home.data[0]);

    yield put(homeDataLoaded(home.data[0]));
  } catch (err) {
    yield put(homeDataLoadingError(err));
  }
}

// Individual exports for testing
export default function* homeDcPageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOAD_HOMEDC, getHomeData);
}
