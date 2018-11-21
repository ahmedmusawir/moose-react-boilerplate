/*
 *
 * HomeDcPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_HOMEDC_SUCCESS,
  LOAD_HOMEDC,
  LOAD_HOMEDC_ERROR,
} from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
  homeDcData: false,
});

function homeDcPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_HOMEDC:
      return state
        .set('loading', true)
        .set('error', false)
        .set('homeDcData', false);
    case LOAD_HOMEDC_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('homeDcData', action.homeData);
    case LOAD_HOMEDC_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default homeDcPageReducer;
