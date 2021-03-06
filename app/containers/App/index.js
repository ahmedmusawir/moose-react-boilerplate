/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomeDcPage from 'containers/HomeDcPage/Loadable';
import FeaturesDcPage from 'containers/FeaturesDcPage/Loadable';
import AboutDcPage from 'containers/AboutDcPage/Loadable';
import MediaDcPage from 'containers/MediaDcPage/Loadable';
import HomePage from 'containers/HomePage/Loadable';
// import FeaturePage from 'containers/FeaturePage/Loadable';
import PostsPage from 'containers/PostsPage/Loadable';
import UsersPage from 'containers/UsersPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  border: 0px solid red;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomeDcPage} />
        <Route path="/features" component={FeaturesDcPage} />
        <Route path="/media" component={MediaDcPage} />
        <Route path="/about" component={AboutDcPage} />
        <Route path="/posts" component={PostsPage} />
        <Route path="/users" component={UsersPage} />
        <Route path="/old-home" component={HomePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
