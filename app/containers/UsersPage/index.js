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
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
// import makeSelectUsersPage, {
//   makeSelectUsers,
//   makeSelectLoading,
//   makeSelectError,
// } from './selectors';
import { Container, Row, ListGroup, ListGroupItem } from 'reactstrap';
import makeSelectUsersPage from './selectors';
import { loadUsers as actionLoadUsers } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class UsersPage extends React.PureComponent {
  componentDidMount() {
    const { usersPage, loadUsers } = this.props;
    const { loading, error, usersData } = usersPage;
    if (!loading && !error && usersData === false) {
      loadUsers();
    }
  }

  render() {
    const { usersData } = this.props.usersPage;
    let usersList = '';
    if (usersData) {
      usersList = usersData.map(user => (
        <ListGroupItem key={user.id}>{user.name}</ListGroupItem>
      ));
    }
    // const { usersPage, loading, error, users } = this.props;
    // console.log(usersData);
    // console.log(usersPage.loading);
    // console.log(usersPage.error);
    // console.log(loading);
    // console.log(error);
    // console.log(users);

    return (
      <div>
        <Helmet>
          <title>UsersPage</title>
          <meta name="description" content="Description of UsersPage" />
        </Helmet>
        <FormattedMessage {...messages.header} />
        <Container>
          <ListGroup>{usersList}</ListGroup>
        </Container>
      </div>
    );
  }
}

UsersPage.propTypes = {
  loadUsers: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  usersPage: makeSelectUsersPage(),
  // loading: makeSelectLoading(),
  // error: makeSelectError(),
  // users: makeSelectUsers(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadUsers: () => dispatch(actionLoadUsers()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'usersPage', reducer });
const withSaga = injectSaga({ key: 'usersPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(UsersPage);
