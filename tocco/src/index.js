import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Tocco from './Components/Tocco.js' //For tocco home page
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//CSS import
import './style/assets/web/assets/mobirise-icons2/mobirise2.css';
import './style/assets/web/assets/mobirise-icons-bold/mobirise-icons-bold.css';
import './style/assets/tether/tether.min.css';
import './style/assets/bootstrap/css/bootstrap.min.css';
import './style/assets/bootstrap/css/bootstrap-grid.min.css';
import './style/assets/bootstrap/css/bootstrap-reboot.min.css';
import './style/assets/dropdown/css/style.css';
import './style/assets/socicon/css/styles.css';
import './style/assets/theme/css/style.css';
import './style/assets/mobirise/css/mbr-additional.css';
import './style/assets/mobirise/css/mbr-additional.css';

ReactDOM.render(
  <BrowserRouter>
    <Tocco />
  </BrowserRouter>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
