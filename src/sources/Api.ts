import Match from "models/Match";
import Player from "models/Player";
import Score from "models/Score";
import Team from "models/Team";
import User from "models/User";
import { MType } from "models/util/Const";

interface Sql
{
  getMatchList(fs: { teamId?: number }): Promise<Match[]>;
  getPlayerList(fs: { teamId?: number }): Promise<Player[]>;
  getTeamList(fs: { userId?: number }): Promise<Team[]>;

  getTeamDetails(teamId: number): Promise<Team>;
  getUserAuth(email: string, password: string): Promise<User>;
  getUserDetails(userId: number): Promise<User>;

  saveMatch(args: { date: Date, type: MType, visitorId: number, localId: number }): Promise<Match>;
  saveScore(args: { min: number, matchId: number, playerId: number }): Promise<Score>;

  setMatch(matchId: number, args: { type?: MType }): Promise<Match>;
  setPlayer(playerId: number, args: { teamId?: number }): Promise<Player>;

  deleteMatch(matchId: number): Promise<void>;
}

export default Sql;