import { fromJS } from 'immutable';
import aboutDcPageReducer from '../reducer';

describe('aboutDcPageReducer', () => {
  it('returns the initial state', () => {
    expect(aboutDcPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
