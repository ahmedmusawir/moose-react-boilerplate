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
import {
  Container,
  Row,
  ListGroup,
  ListGroupItem,
  Jumbotron,
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody,
} from 'reactstrap';
import { loadMediaData as actionLoadMediaData } from './actions';
import makeSelectMediaDcPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class MediaDcPage extends React.Component {
  componentDidMount() {
    const { mediaDcPage, loadMediaData } = this.props;
    const { loading, error, mediaDcData } = mediaDcPage;
    if (!loading && !error && mediaDcData === false) {
      loadMediaData();
    }
  }

  render() {
    const { mediaDcData } = this.props.mediaDcPage;
    const { title, description, articles } = mediaDcData;
    let articleList = '';
    if (articles) {
      articleList = articles.map(article => (
        <Card key={article.id}>
          <CardImg top width="100%" src={article.image} alt="Card image cap" />
          <CardBody>
            <CardTitle>{article.title}</CardTitle>
            <CardSubtitle>{article.id}</CardSubtitle>
            <CardText>{article.description}</CardText>
            <Button>Read More</Button>
          </CardBody>
        </Card>
      ));
    }
    return (
      <div>
        <Helmet>
          <title>MediaDcPage</title>
          <meta name="description" content="Description of MediaDcPage" />
        </Helmet>
        {/* <FormattedMessage {...messages.header} /> */}
        <Jumbotron>
          <h1 className="display-3">{title}</h1>
          <p className="lead">{description}</p>
          <hr className="my-2" />
        </Jumbotron>
        <Container>
          <CardColumns>{articleList}</CardColumns>
        </Container>
      </div>
    );
  }
}

MediaDcPage.propTypes = {
  loadMediaData: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  mediaDcPage: makeSelectMediaDcPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadMediaData: () => dispatch(actionLoadMediaData()),
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
