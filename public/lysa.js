import React from 'react';  // eslint-disable-line
import { render } from 'react-dom';
import { Routes } from './components/router';

(function() {

  require('./styles/base.scss');

  function load() {
    render((
      <Routes />
    ), document.getElementById('content'));
  }
  load();

  document.addEventListener('DOMContentLoaded', load, false);

})();