import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import IndexPage from './components/index.jsx';
import DetailsPage from './components/details.jsx'

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={IndexPage} />
    <Route path="/details" component={DetailsPage} />
  </Router>
);

export default routes;