import * as React from 'react';
import { Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

import Appbar from 'ui/components/Appbar';
import Drawer from 'ui/components/Drawer';
import Teams from 'ui/containers/Teams';


import Results from 'ui/components/Results';
import * as styles from 'ui/styles/css/home';


class Home extends React.Component
{
  public render()
  {
    return (
      <div className={styles.module}>
        <div className={"animated fadeIn"}>
          <div className={styles.nav}>
            <Drawer />
          </div>
          <div className={styles.container}>
            <div className={styles.toolbar}>
              <Appbar />
            </div>
            <div className={styles.content}>
              <Switch>
                <Route
                  path='/results'
                  component={Results} />
                <Route
                  path='/teams'
                  component={Teams} />
                <Route
                  path='/standings'
                  component={() => <div>Standings</div>} />
                <Route
                  path='/news'
                  component={() => <div>News</div>} />
                <Redirect to='/results' />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
