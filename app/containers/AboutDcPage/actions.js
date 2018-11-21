/*
 *
 * AboutDcPage actions
 *
 */

import {
  LOAD_ABOUTDC,
  LOAD_ABOUTDC_SUCCESS,
  LOAD_ABOUTDC_ERROR,
} from './constants';

/**
 * Load the homeDataitories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_ABOUTDC
 */
export function loadAboutData() {
  return {
    type: LOAD_ABOUTDC,
  };
}

/**
 * Dispatched when the homeDataitories are loaded by the request saga
 *
 * @param  {array} aboutData The homeDataitory data
 *
 * @return {object}      An action object with a type of LOAD_ABOUTDC_SUCCESS passing the aboutData
 */
export function aboutDataLoaded(aboutData) {
  return {
    type: LOAD_ABOUTDC_SUCCESS,
    aboutData,
  };
}

/**
 * Dispatched when loading the homeDataitories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_ABOUTDC_ERROR passing the error
 */
export function aboutDataLoadingError(error) {
  return {
    type: LOAD_ABOUTDC_ERROR,
    error,
  };
}
