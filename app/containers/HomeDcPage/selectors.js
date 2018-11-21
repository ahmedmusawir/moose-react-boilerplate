import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homeDcPage state domain
 */

const selectHomeDcPageDomain = state => state.get('homeDcPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by HomeDcPage
 */

const makeSelectHomeDcPage = () =>
  createSelector(selectHomeDcPageDomain, substate => substate.toJS());

export default makeSelectHomeDcPage;
export { selectHomeDcPageDomain };
