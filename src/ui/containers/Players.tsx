import PlayersView from "views/Players";
import PlayersCtrl from "controllers/Players";
import PlayersComponent from "ui/components/Players";

import Factory from 'controllers/Factory';
import Player from "models/Player";
import Team from "models/Team";


class Players extends PlayersComponent implements PlayersView
{
  private ctrl: PlayersCtrl;

  constructor(props: any)
  {
    super(props);
    this.ctrl = Factory.createPlayers(this);
    this.state = {};
  }

  public componentDidMount()
  {
    this.ctrl.onMount();
  }

  //Events

  //Methods (override)

  public setPlayers(players: Player[])
  {
    this.setState(s => ({
      players: players
    }));
  }

  public setTeams(teams: Team[])
  {
    this.setState(s => ({
      teams: teams
    }));
  }
}

export default Players;