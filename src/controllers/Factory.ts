import LoginView from "views/Login";
import LoginCtrl from "controllers/Login";
import PlayersView from "views/Players";
import PlayersCtrl from "controllers/Players";
import TeamsView from "views/Teams";
import TeamsCtrl from "controllers/Teams";

import Api from "sources/api/Source";

class Factory
{
  static createLogin(view: LoginView): LoginCtrl
  {
    return new LoginCtrl(view, {
      api: Api.getInstance()
    });
  }

  static createPlayers(view: PlayersView): PlayersCtrl
  {
    return new PlayersCtrl(view, {
      api: Api.getInstance()
    });
  }

  static createTeams(view: TeamsView): TeamsCtrl
  {
    return new TeamsCtrl(view, {
      api: Api.getInstance()
    });
  }
}

export default Factory;