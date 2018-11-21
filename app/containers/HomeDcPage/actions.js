/*
 *
 * HomeDcPage actions
 *
 */

import {
  LOAD_HOMEDC,
  LOAD_HOMEDC_SUCCESS,
  LOAD_HOMEDC_ERROR,
} from './constants';

/**
 * Load the homeDataitories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_HOMEDC
 */
export function loadHomeData() {
  return {
    type: LOAD_HOMEDC,
  };
}

/**
 * Dispatched when the homeDataitories are loaded by the request saga
 *
 * @param  {array} homeData The homeDataitory data
 *
 * @return {object}      An action object with a type of LOAD_HOMEDC_SUCCESS passing the homeData
 */
export function homeDataLoaded(homeData) {
  return {
    type: LOAD_HOMEDC_SUCCESS,
    homeData,
  };
}

/**
 * Dispatched when loading the homeDataitories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_HOMEDC_ERROR passing the error
 */
export function homeDataLoadingError(error) {
  return {
    type: LOAD_HOMEDC_ERROR,
    error,
  };
}
