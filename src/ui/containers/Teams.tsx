import TeamsView from "views/Teams";
import TeamsCtrl from "controllers/Teams";
import TeamsComponent from "ui/components/Teams";

import Factory from 'controllers/Factory';
import Team from "models/Team";


class Teams extends TeamsComponent implements TeamsView
{
  private ctrl: TeamsCtrl;

  constructor(props: any)
  {
    super(props);
    this.ctrl = Factory.createTeams(this);
    this.state = {};
  }

  public componentDidMount()
  {
    this.ctrl.onMount();
  }

  //Events

  //Methods (override)

  public setTeams(teams: Team[])
  {
    this.setState(s => ({
      teams: teams
    }));
  }
}

export default Teams;