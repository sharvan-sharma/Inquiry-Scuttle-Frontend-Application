import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import {BrowserRouter,Router} from 'react-router-dom'
import store from './redux/store'
import history from './history'
import ErrorBoundary from './ErrorBoundary'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Router history={history}>
        <ErrorBoundary>
          <App/>
        </ErrorBoundary>
      </Router>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

