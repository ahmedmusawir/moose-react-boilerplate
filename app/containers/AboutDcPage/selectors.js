import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the aboutDcPage state domain
 */

const selectAboutDcPageDomain = state => state.get('aboutDcPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by AboutDcPage
 */

const makeSelectAboutDcPage = () =>
  createSelector(selectAboutDcPageDomain, substate => substate.toJS());

export default makeSelectAboutDcPage;
export { selectAboutDcPageDomain };
