/*
 *
 * MediaDcPage reducer
 *
 */
import { fromJS } from 'immutable';
import {
  LOAD_MEDIADC_SUCCESS,
  LOAD_MEDIADC,
  LOAD_MEDIADC_ERROR,
} from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
  mediaDcData: false,
});

function mediaDcPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MEDIADC:
      return state
        .set('loading', true)
        .set('error', false)
        .set('mediaDcData', false);
    case LOAD_MEDIADC_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('mediaDcData', action.mediaData);
    case LOAD_MEDIADC_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default mediaDcPageReducer;
