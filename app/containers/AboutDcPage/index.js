/**
 *
 * AboutDcPage
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
import { loadAboutData as actionLoadAboutData } from './actions';
import makeSelectAboutDcPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class AboutDcPage extends React.Component {
  componentDidMount() {
    const { aboutDcPage, loadAboutData } = this.props;
    const { loading, error, aboutDcData } = aboutDcPage;
    if (!loading && !error && aboutDcData === false) {
      loadAboutData();
    }
  }

  render() {
    const { aboutDcData } = this.props.aboutDcPage;
    const { title, description, articles } = aboutDcData;
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
          <title>AboutDcPage</title>
          <meta name="description" content="Description of AboutDcPage" />
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

AboutDcPage.propTypes = {
  loadAboutData: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  aboutDcPage: makeSelectAboutDcPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadAboutData: () => dispatch(actionLoadAboutData()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'aboutDcPage', reducer });
const withSaga = injectSaga({ key: 'aboutDcPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AboutDcPage);
