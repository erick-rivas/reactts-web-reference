import * as React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Item from 'ui/components/players/Item';

import Player from 'models/Player';
import Team from 'models/Team';
import * as styles from 'ui/styles/css/players';


class Players extends React.Component<any, States>
{
  public render() 
  {
    const { players = [] } = this.state;
    const { teams = [] } = this.state;
    const { url } = this.props.match;

    const playerList = players.map(p =>
    {
      const team = teams.filter(t => t.id == p.teamId)[0];
      return (
        <Link to={`${url}/${p.id}`}>
          <Item
            player={p}
            team={team} />
        </Link>
      );
    });

    return (
      <div className={styles.module}>
        <div className={styles.container}>
          {playerList}
        </div>
      </div>
    );
  }
}

interface States
{
  players?: Player[];
  teams?: Team[];
}

export default Players;