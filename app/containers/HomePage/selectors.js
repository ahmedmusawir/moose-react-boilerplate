/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('homePage', initialState);

const makeSelectUsername = () =>
  createSelector(selectHome, homeState => homeState.get('username'));

const makeSelectBtnValue = () =>
  createSelector(selectHome, homeState => homeState.get('btnValue'));

export { selectHome, makeSelectUsername, makeSelectBtnValue };
