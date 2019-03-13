import * as React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Item from 'ui/components/teams/Item';

import Team from 'models/Team';
import * as styles from 'ui/styles/css/teams';


class Teams extends React.Component<any, States>
{
  public render() 
  {
    const { teams = [] } = this.state;
    const { url } = this.props.match;

    const teamList = teams.map(t =>
    {
      return (
        <Link to={`${url}/${t.id}`}>
          <Item
            team={t} />
        </Link>
      );
    });

    return (
      <div className={styles.module}>
        <div className={styles.container}>
          {teamList}
        </div>
      </div>
    );
  }
}

interface States
{
  teams?: Team[];
}

export default Teams;