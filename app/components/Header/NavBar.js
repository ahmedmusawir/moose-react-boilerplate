import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import messages from './messages';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md" className="mb-5">
          <NavbarBrand tag={Link} to="/">
            reactstrap
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/">
                  <FormattedMessage {...messages.home} />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/features">
                  <FormattedMessage {...messages.features} />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/media">
                  <FormattedMessage {...messages.media} />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/about">
                  <FormattedMessage {...messages.about} />
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag={Link} to="/users">
                    <FormattedMessage {...messages.users} />
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/old-home">
                    <FormattedMessage {...messages.oldhome} />
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
