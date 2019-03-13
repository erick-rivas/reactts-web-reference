import Match from "models/Match";
import Player from "models/Player";
import Score from "models/Score";
import Team from "models/Team";
import User from "models/User";

abstract class Mapper<T>
{
  transformList(dataSet: any): T[]
  {
    if (!dataSet) return [];
    const result = [];
    for (let data of dataSet)
      result.push(this.transform(data));
    return result;
  }
  abstract transform(data): T;
}

class MatchMapper extends Mapper<Match>
{
  private teamMapper: TeamMapper;
  private scoreMapper: ScoreMapper;

  constructor()
  {
    super();
    this.teamMapper = new TeamMapper();
    this.scoreMapper = new ScoreMapper();
  }

  transform(data: any): Match  
  {
    return new Match(data.id)
      .build({
        date: data.date,
        type: Match.getMType(data.type),
        visitor: this.teamMapper.transform(data.visitor),
        local: this.teamMapper.transform(data.local),
        scores: this.scoreMapper.transformList(data.scores)
      });
  }
}

class PlayerMapper extends Mapper<Player>
{
  constructor()
  {
    super();
  }

  transform(data: any): Player  
  {
    return new Player(data.id)
      .build({
        name: data.name,
        photoUrl: data.photo_url,
        teamId: data.team_id
      });
  }
}

class ScoreMapper extends Mapper<Score>
{
  private playerMapper: PlayerMapper;

  constructor()
  {
    super();
    this.playerMapper = new PlayerMapper();
  }

  transform(data: any): Score  
  {
    return new Score(data.id)
      .build({
        min: data.min,
        matchId: data.match_id,
        player: this.playerMapper.transform(data.player)
      });
  }
}

class TeamMapper extends Mapper<Team>
{
  private playerMapper: PlayerMapper;

  constructor()
  {
    super();
    this.playerMapper = new PlayerMapper();
  }

  transform(data: any): Team  
  {
    return new Team(data.id)
      .build({
        name: data.name,
        logoUrl: data.logo_url,
        players: this.playerMapper.transformList(data.players)
      });
  }
}

class UserMapper extends Mapper<User>
{
  constructor()
  {
    super();
  }

  transform(data: any): User  
  {
    return new User(data.id)
      .build({
        email: data.email,
        password: data.password
      });
  }
}

export { Mapper, MatchMapper, PlayerMapper, ScoreMapper, TeamMapper, UserMapper }