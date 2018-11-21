/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  features: {
    id: `${scope}.features`,
    defaultMessage: 'Features',
  },
  media: {
    id: `${scope}.media`,
    defaultMessage: 'Media',
  },
  about: {
    id: `${scope}.about`,
    defaultMessage: 'About',
  },
  oldhome: {
    id: `${scope}.oldhome`,
    defaultMessage: 'OldHome',
  },
  users: {
    id: `${scope}.users`,
    defaultMessage: 'Users',
  },
});
