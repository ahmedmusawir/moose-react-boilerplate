import { fromJS } from 'immutable';
import mediaDcPageReducer from '../reducer';

describe('mediaDcPageReducer', () => {
  it('returns the initial state', () => {
    expect(mediaDcPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
