import { fromJS } from 'immutable';
import homeDcPageReducer from '../reducer';

describe('homeDcPageReducer', () => {
  it('returns the initial state', () => {
    expect(homeDcPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
