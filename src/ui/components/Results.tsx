import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

import Nav from 'ui/components/results/Nav';
import Players from 'ui/containers/Players'

import * as styles from 'ui/styles/css/results';


class Results extends React.Component
{
  render() 
  {
    return (
      <div className={styles.module}>
        <div className={styles.toolbar}>
          <Route
            path='/results/:component'
            component={Nav} />
        </div>
        <div className={styles.content}>
          <div className={styles.container}>
            <Switch>
              <Route
                path='/results/players'
                component={Players} />
              <Route
                path='/results/matches'
                component={() => <div>Matches</div>} />
              <Route
                path='/results/calendar'
                component={() => <div>Calendar</div>} />
              <Redirect to={`/results/players`} />
            </Switch>
          </div>
        </div>

      </div>
    );
  }
}

export default Results;