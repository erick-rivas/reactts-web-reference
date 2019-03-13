import * as React from 'react'

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InfoIcon from '@material-ui/icons/Info'
import NotificationIcon from '@material-ui/icons/Notifications'

import * as styles from 'ui/styles/css/appbar';

class Appbar extends React.Component
{
  public render()
  {
    return (
      <div className={styles.module}>

        <IconButton className={styles.option + ' ' + styles.menu}>
          <MenuIcon />
        </IconButton>

        <div className={styles.options}>

          <IconButton className={styles.option}>
            <InfoIcon />
          </IconButton>
          <IconButton className={styles.option}>
            <NotificationIcon />
          </IconButton>

        </div>

      </div>
    );
  }
}

export default Appbar;
