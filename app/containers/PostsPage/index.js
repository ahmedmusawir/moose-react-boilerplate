/**
 *
 * PostsPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

// Bootstrap 4
import { Container, Row, Col } from 'reactstrap';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectPostsPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class PostsPage extends React.Component {
  render() {
    return (
      <Container>
        <Helmet>
          <title>PostsPage</title>
          <meta name="description" content="Description of PostsPage" />
        </Helmet>
        <FormattedMessage {...messages.header} />
        <p>
          <FormattedMessage {...messages.testContent} />
        </p>
      </Container>
    );
  }
}

PostsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  postsPage: makeSelectPostsPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'postsPage', reducer });
const withSaga = injectSaga({ key: 'postsPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PostsPage);
