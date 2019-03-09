import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from 'ui/components/App';
import Login from 'ui/components/Login';
import worker from 'ui/assets/worker';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import 'src/ui/styles/css/index.css';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/' component={App} />
    </Switch>
  </Router>,
  document.getElementById('root') as HTMLElement
);
worker();
