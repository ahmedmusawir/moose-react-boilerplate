/**
 *
 * MediaDcPage
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
import makeSelectMediaDcPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class MediaDcPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>MediaDcPage</title>
          <meta name="description" content="Description of MediaDcPage" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

MediaDcPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  mediaDcPage: makeSelectMediaDcPage(),
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

const withReducer = injectReducer({ key: 'mediaDcPage', reducer });
const withSaga = injectSaga({ key: 'mediaDcPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MediaDcPage);
