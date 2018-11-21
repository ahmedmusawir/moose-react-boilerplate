import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the mediaDcPage state domain
 */

const selectMediaDcPageDomain = state => state.get('mediaDcPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by MediaDcPage
 */

const makeSelectMediaDcPage = () =>
  createSelector(selectMediaDcPageDomain, substate => substate.toJS());

export default makeSelectMediaDcPage;
export { selectMediaDcPageDomain };
