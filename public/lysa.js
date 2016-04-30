import React from 'react';  // eslint-disable-line
import { render } from 'react-dom';
import { App } from './components/app';

(function() {

  require('./styles/base.scss');

  function load() {
    render((
      <App />
    ), document.getElementById('content'));
  }
  load();

  document.addEventListener('DOMContentLoaded', load, false);

})();