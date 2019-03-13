import * as React from 'react'

import ListItem from '@material-ui/core/ListItem';
import NavIcon from '@material-ui/icons/NavigateNext';

import Player from 'models/Player';
import Team from 'models/Team';
import * as styles from 'ui/styles/css/playerItem';
import Mocks from 'models/util/Mocks';


class Item extends React.Component<Props, any>
{
  render() 
  {
    const { player = Mocks.Player()[0] } = this.props;
    const { team = Mocks.Team()[0] } = this.props;

    return (
      <ListItem
        className={styles.module}
        key={player.id}
        button>
        <div
          className={styles.image}
          style={{ backgroundImage: `url("${player.photoUrl}")` }} />
        <div className={styles.content}>
          <div className={styles.title}>{player.name}</div>
          <div className={styles.description}>{team.name}</div>
        </div>
        <div className={styles.options}>
          <NavIcon className={styles.next} />
        </div>
      </ListItem>

    );
  }
}

interface Props
{
  player?: Player;
  team?: Team;
}


export default Item;