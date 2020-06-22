import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { datadogRum } from '@datadog/browser-rum';
import { datadogLogs } from '@datadog/browser-logs';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


datadogRum.init({
    applicationId: '2848a661-a050-4cb6-8a1d-60d31e5c306a',
    clientToken: 'pub8df0623c1f91c50c62c214b15ee95090',
    datacenter: 'us',
    sampleRate: 100,
});

datadogLogs.init({
    clientToken: 'pube3d6d0e37df5d1cb5d73de6cf8e60ab5',
    datacenter: 'us',
    forwardErrorsToLogs: true,
    sampleRate: 100
});

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
