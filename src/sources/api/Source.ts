import Repository from "sources/Api";
import { Pair } from "models/util/Util";
import Match from "models/Match";
import Player from "models/Player";
import Score from "models/Score";
import Team from "models/Team";
import User from "models/User";

import Generator from "models/util/Generator";
import Executor from "sources/api/Executor";
import * as Mapper from "sources/api/Mappers";
import Mocks from "models/util/Mocks";
import { MType } from "models/util/Const";

class Source extends Executor implements Repository
{
  async getMatchList(fs: { teamId?: number }): Promise<Match[]>
  {
    return Mocks.Match();
  }

  async getPlayerList(fs: { teamId?: number }): Promise<Player[]>
  {
    return Mocks.Player();
  }

  async getTeamList(fs: { userId?: number }): Promise<Team[]>
  {
    return Mocks.Team();
  }



  async getTeamDetails(teamId: number): Promise<Team>
  {
    return Mocks.Team()[0];
  }

  async getUserAuth(email: string, password: string): Promise<User>
  {
    return Mocks.User()[0];
  }

  async getUserDetails(userId: number): Promise<User>
  {
    return Mocks.User()[0];
  }



  async saveMatch(args: { date: Date, type: MType, visitorId: number, localId: number }): Promise<Match>
  {
    return Mocks.Match()[0];
  }

  async saveScore(args: { min: number, matchId: number, playerId: number }): Promise<Score>
  {
    return Mocks.Score()[0];
  }



  async setMatch(matchId: number, args: { type?: MType }): Promise<Match>
  {
    return Mocks.Match()[0];
  }

  async setPlayer(playerId: number, args: { teamId?: number }): Promise<Player>
  {
    return Mocks.Player()[0];
  }



  async deleteMatch(matchId: number): Promise<void>
  {
    return null;
  }

  private static instance: Source;
  private constructor() { super(); }
  static getInstance(): Source { return this.instance || (this.instance = new this()); }
}

export default Source;