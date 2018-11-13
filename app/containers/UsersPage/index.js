/**
 *
 * UsersPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

// import { , Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {
  Container,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Row,
} from 'reactstrap';
import { makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import messages from './messages';

import { makeSelectUsers } from './selectors';
import {
  loadUsers as actionLoadUsers,
  deleteUser as actionDeleteUser,
  addUser as actionAddUser,
} from './actions';

/* eslint-disable react/prefer-stateless-function */
export class UsersPage extends React.PureComponent {
  componentDidMount() {
    const { loading, error, loadUsers, users } = this.props;
    if (!loading && !error && users === false) {
      loadUsers();
    }
  }

  render() {
    const {
      loading,
      error,
      users,
      loadUsers,
      deleteUser,
      addUser,
    } = this.props;
    console.log(users);
    console.log(error);
    return (
      <Container>
        <Helmet>
          <title>UsersPage</title>
          <meta name="description" content="Description of UsersPage" />
        </Helmet>
        <FormattedMessage {...messages.header} />
        <div className="row mb-3 mx-auto">
          <Form>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="with a placeholder"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="password placeholder"
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="exampleAddress">Address</Label>
              <Input
                type="text"
                name="address"
                id="exampleAddress"
                placeholder="1234 Main St"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleAddress2">Address 2</Label>
              <Input
                type="text"
                name="address2"
                id="exampleAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </FormGroup>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleCity">City</Label>
                  <Input type="text" name="city" id="exampleCity" />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="exampleState">State</Label>
                  <Input type="text" name="state" id="exampleState" />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label for="exampleZip">Zip</Label>
                  <Input type="text" name="zip" id="exampleZip" />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup check>
              <Input type="checkbox" name="check" id="exampleCheck" />
              <Label for="exampleCheck" check>
                Check me out
              </Label>
            </FormGroup>
            <Button>Sign in</Button>
          </Form>
        </div>
        <hr />
        <Row className="mx-auto">
          <Form>
            <FormGroup row>
              <Label for="exampleEmail" sm={2}>
                Email
              </Label>
              <Col sm={10}>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="with a placeholder"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="examplePassword" sm={2}>
                Password
              </Label>
              <Col sm={10}>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="password placeholder"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleSelect" sm={2}>
                Select
              </Label>
              <Col sm={10}>
                <Input type="select" name="select" id="exampleSelect" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleSelectMulti" sm={2}>
                Select Multiple
              </Label>
              <Col sm={10}>
                <Input
                  type="select"
                  name="selectMulti"
                  id="exampleSelectMulti"
                  multiple
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleText" sm={2}>
                Text Area
              </Label>
              <Col sm={10}>
                <Input type="textarea" name="text" id="exampleText" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleFile" sm={2}>
                File
              </Label>
              <Col sm={10}>
                <Input type="file" name="file" id="exampleFile" />
                <FormText color="muted">
                  This is some placeholder block-level help text for the above
                  input. It's a bit lighter and easily wraps to a new line.
                </FormText>
              </Col>
            </FormGroup>
            <FormGroup tag="fieldset" row>
              <legend className="col-form-label col-sm-2">Radio Buttons</legend>
              <Col sm={10}>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio2" /> Option one is this and
                    that—be sure to include why it's great
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio2" /> Option two can be
                    something else and selecting it will deselect option one
                  </Label>
                </FormGroup>
                <FormGroup check disabled>
                  <Label check>
                    <Input type="radio" name="radio2" disabled /> Option three
                    is disabled
                  </Label>
                </FormGroup>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="checkbox2" sm={2}>
                Checkbox
              </Label>
              <Col sm={{ size: 10 }}>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" id="checkbox2" /> Check me out
                  </Label>
                </FormGroup>
              </Col>
            </FormGroup>
            <FormGroup check row>
              <Col sm={{ size: 10, offset: 2 }}>
                <Button>Submit</Button>
              </Col>
            </FormGroup>
          </Form>
        </Row>
      </Container>
    );
  }
}

UsersPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

export function mapStateToProps(state) {
  return {
    loading: makeSelectLoading()(state),
    error: makeSelectError()(state),
    // users: makeSelectUsers()(state),
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    loadUsers: () => dispatch(actionLoadUsers()),
    deleteUser: user => dispatch(actionDeleteUser(user)),
    addUser: user => dispatch(actionAddUser(user)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersPage);
