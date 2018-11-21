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
import { loadHomeData as actionLoadHomeData } from './actions';
import makeSelectHomeDcPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class HomeDcPage extends React.Component {
  componentDidMount() {
    const { homeDcPage, loadHomeData } = this.props;
    const { loading, error, homeDcData } = homeDcPage;
    if (!loading && !error && homeDcData === false) {
      loadHomeData();
    }
  }

  render() {
    const { homeDcData } = this.props.homeDcPage;
    const { title, description, articles } = homeDcData;
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
          <title>HomeDcPage</title>
          <meta name="description" content="Description of HomeDcPage" />
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

HomeDcPage.propTypes = {
  loadHomeData: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homeDcPage: makeSelectHomeDcPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadHomeData: () => dispatch(actionLoadHomeData()),
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
