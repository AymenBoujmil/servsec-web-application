import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Profile from './components/Profile';
import LoginForm from './components/LoginForm'
import MostRequested from './components/MostRequested';
import ServiceItem from './components/ServiceItem';

ReactDOM.render(
  <React.StrictMode>
    <ServiceItem/>
  </React.StrictMode>,
  document.getElementById('root')
);

