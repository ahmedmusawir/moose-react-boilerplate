/*
 *
 * MediaDcPage actions
 *
 */

import {
  LOAD_MEDIADC,
  LOAD_MEDIADC_SUCCESS,
  LOAD_MEDIADC_ERROR,
} from './constants';

/**
 * Load the mediaDataitories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_MEDIADC
 */
export function loadMediaData() {
  return {
    type: LOAD_MEDIADC,
  };
}

/**
 * Dispatched when the mediaDataitories are loaded by the request saga
 *
 * @param  {array} mediaData The mediaDataitory data
 *
 * @return {object}      An action object with a type of LOAD_MEDIADC_SUCCESS passing the mediaData
 */
export function mediaDataLoaded(mediaData) {
  return {
    type: LOAD_MEDIADC_SUCCESS,
    mediaData,
  };
}

/**
 * Dispatched when loading the mediaDataitories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_MEDIADC_ERROR passing the error
 */
export function mediaDataLoadingError(error) {
  return {
    type: LOAD_MEDIADC_ERROR,
    error,
  };
}
