import * as React from 'react'

import ListItem from '@material-ui/core/ListItem';
import NavIcon from '@material-ui/icons/NavigateNext';

import Team from 'models/Team';
import * as styles from 'ui/styles/css/playerItem';
import Mocks from 'models/util/Mocks';


class Item extends React.Component<Props, any>
{
  render() 
  {
    const { team = Mocks.Team()[0] } = this.props;

    return (
      <ListItem
        className={styles.module}
        key={team.id}
        button>
        <div
          className={styles.image}
          style={{ backgroundImage: `url("${team.logoUrl}")` }} />
        <div className={styles.content}>
          <div className={styles.title}>{team.name}</div>
          <div className={styles.description}>{`${team.players.length.toString()} players`}</div>
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
  team?: Team;
}


export default Item;