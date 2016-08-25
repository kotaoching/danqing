// import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';

import './assets/stylesheets/global.scss';

import configureStore from './store';

import App from './containers/App';
import Home from './containers/Home';
import Signup from './containers/Signup';
import Signin from './containers/Signin';
import Signout from './containers/Signout';
import Question from './containers/Question';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDom.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/signin" component={Signin}></Route>
        <Route path="/signout" component={Signout}></Route>
        <Route path="/q/:id" component={Question}></Route>
        <Route path="/u/:username" component={Question}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);