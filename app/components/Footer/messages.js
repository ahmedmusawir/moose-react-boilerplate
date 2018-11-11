/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Footer';

export default defineMessages({
  mooseMessage: {
    id: `${scope}.moose.message`,
    defaultMessage: 'This project has been Moosified.',
  },
  authorMessage: {
    id: `${scope}.author.message1`,
    defaultMessage: `
      Made after a brain upgrade by {author}.
    `,
  },
});
