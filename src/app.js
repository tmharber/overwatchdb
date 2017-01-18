import React from 'react';
import { render } from 'react-dom';
import AppRoutes from './components/appRoutes';

require('./assets/css/bootstrap/css/bootstrap.css');

render(
  <AppRoutes/>, document.getElementById('main')
);