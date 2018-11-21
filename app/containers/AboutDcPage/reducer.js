/*
 *
 * AboutDcPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_ABOUTDC_SUCCESS,
  LOAD_ABOUTDC,
  LOAD_ABOUTDC_ERROR,
} from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
  aboutDcData: false,
});

function aboutDcPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ABOUTDC:
      return state
        .set('loading', true)
        .set('error', false)
        .set('aboutDcData', false);
    case LOAD_ABOUTDC_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('aboutDcData', action.aboutData);
    case LOAD_ABOUTDC_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default aboutDcPageReducer;
