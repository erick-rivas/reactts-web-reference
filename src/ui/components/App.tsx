import * as React from 'react';

import Home from 'ui/components/Home';
import Login from 'ui/containers/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends React.Component
{
  public render()
  {
    return (
      <Router>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;