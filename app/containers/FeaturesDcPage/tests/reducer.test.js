import { fromJS } from 'immutable';
import featuresDcPageReducer from '../reducer';

describe('featuresDcPageReducer', () => {
  it('returns the initial state', () => {
    expect(featuresDcPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
