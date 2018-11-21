import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the featuresDcPage state domain
 */

const selectFeaturesDcPageDomain = state =>
  state.get('featuresDcPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by FeaturesDcPage
 */

const makeSelectFeaturesDcPage = () =>
  createSelector(selectFeaturesDcPageDomain, substate => substate.toJS());

export default makeSelectFeaturesDcPage;
export { selectFeaturesDcPageDomain };
