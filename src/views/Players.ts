import Player from "models/Player";
import Team from "models/Team";

interface Players
{
  setPlayers(players: Player[]);
  setTeams(teams: Team[]);
}

export default Players;