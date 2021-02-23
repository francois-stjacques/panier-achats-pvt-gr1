import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import Page from './Page';

const baseName = (window.location.href.search(/github\.io/i) !== -1) ? "/panier-achats-pvt-gr1" : "" ;

ReactDOM.render(
  <React.StrictMode>
    <Router basename={baseName}>
      <Page />
    </Router>
  </React.StrictMode>,
  document.getElementById('racine')
);
