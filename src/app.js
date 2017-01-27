import React from 'react';
import { render } from 'react-dom';
import AppRoutes from './components/app-routes';

require('./assets/css/bootstrap/css/bootstrap.css');

render(
  <AppRoutes/>, document.getElementById('main')
);