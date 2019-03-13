import View from 'views/Teams';
import Api from 'sources/Api';

class Teams
{
  private view: View;
  private api: Api;

  constructor(view: View, src: { api: Api })
  {
    this.view = view;
    this.api = src.api;
  }

  public onMount()
  {
    this.loadData().then(() => { });
  }

  private async loadData(): Promise<void>
  {
    let teams = await this.api.getTeamList({});
    this.view.setTeams(teams);
  }
}

export default Teams;