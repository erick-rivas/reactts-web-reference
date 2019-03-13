import View from 'views/Players';
import Api from 'sources/Api';

class Players
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
    let players = await this.api.getPlayerList({});
    let teams = await this.api.getTeamList({});
    this.view.setPlayers(players);
    this.view.setTeams(teams);
  }
}

export default Players;