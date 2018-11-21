/**
 * MediaDcPage Sagas
 */
import { takeLatest, call, put, select } from 'redux-saga/effects';
import { LOAD_MEDIADC } from 'containers/MediaDcPage/constants';
import {
  mediaDataLoaded,
  mediaDataLoadingError,
} from 'containers/MediaDcPage/actions';
import axios from 'axios';

export function* getMediaData() {
  // Select username from store
  const requestURL = 'http://128.199.122.47:3002/media';

  try {
    // Call our request helper (see 'utils/request')
    // const users = yield call(request, requestURL);
    const media = yield axios.get(requestURL);
    // console.log(media.data[0]);

    yield put(mediaDataLoaded(media.data[0]));
  } catch (err) {
    yield put(mediaDataLoadingError(err));
  }
}

// Individual exports for testing
export default function* mediaDcPageSaga() {
  // See example in containers/MediaPage/saga.js
  yield takeLatest(LOAD_MEDIADC, getMediaData);
}
