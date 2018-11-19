/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import { CHANGE_USERNAME, BUTTON_CLICK } from './constants';

// The initial state of the App
export const initialState = fromJS({
  username: '',
  btnValue: 'The Moose is Loose!',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      // Delete prefixed '@' from the github username
      return state.set('username', action.name.replace(/@/gi, ''));

    case BUTTON_CLICK:
      // Delete prefixed '@' from the github username
      console.log(`Button value from Reducer BUTTON_CLICK: ${action.value}`);

      return state.set(
        'btnValue',
        action.value.replace(/The Moose is Loose!/gi, 'ahmedmusawir'),
      );
    default:
      return state;
  }
}

export default homeReducer;
