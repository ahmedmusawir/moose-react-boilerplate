/**
 *
 * FeaturesDcPage
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
import makeSelectFeaturesDcPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class FeaturesDcPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>FeaturesDcPage</title>
          <meta name="description" content="Description of FeaturesDcPage" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

FeaturesDcPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  featuresDcPage: makeSelectFeaturesDcPage(),
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

const withReducer = injectReducer({ key: 'featuresDcPage', reducer });
const withSaga = injectSaga({ key: 'featuresDcPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(FeaturesDcPage);
