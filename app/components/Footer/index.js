import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Collapse, Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Navbar color="dark" dark expand="md" className="fixed-bottom footer">
      <section>
        <FormattedMessage {...messages.mooseMessage} />
      </section>
      <section>
        <LocaleToggle />
      </section>
      <section>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: <A href="https://htmlfivedev.com">The Moose</A>,
          }}
        />
      </section>
    </Navbar>
  );
}

export default Footer;
