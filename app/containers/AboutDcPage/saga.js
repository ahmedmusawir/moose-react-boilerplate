/**
 * AboutDcPage Sagas
 */
import { takeLatest, call, put, select } from 'redux-saga/effects';
import { LOAD_ABOUTDC } from 'containers/AboutDcPage/constants';
import {
  aboutDataLoaded,
  aboutDataLoadingError,
} from 'containers/AboutDcPage/actions';
import axios from 'axios';

export function* getAboutData() {
  // Select username from store
  const requestURL = 'http://128.199.122.47:3002/about';

  try {
    // Call our request helper (see 'utils/request')
    // const users = yield call(request, requestURL);
    const about = yield axios.get(requestURL);
    // console.log(about.data[0]);

    yield put(aboutDataLoaded(about.data[0]));
  } catch (err) {
    yield put(aboutDataLoadingError(err));
  }
}

// Individual exports for testing
export default function* aboutDcPageSaga() {
  // See example in containers/AboutPage/saga.js
  yield takeLatest(LOAD_ABOUTDC, getAboutData);
}
