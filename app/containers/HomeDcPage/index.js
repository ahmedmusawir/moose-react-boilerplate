/**
 *
 * HomeDcPage
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
import makeSelectHomeDcPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class HomeDcPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>HomeDcPage</title>
          <meta name="description" content="Description of HomeDcPage" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

HomeDcPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homeDcPage: makeSelectHomeDcPage(),
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

const withReducer = injectReducer({ key: 'homeDcPage', reducer });
const withSaga = injectSaga({ key: 'homeDcPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomeDcPage);
