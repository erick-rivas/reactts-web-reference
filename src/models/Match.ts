import Model from "models/util/Model";
import Team from "models/Team";
import Score from "models/Score";
import { MType } from "models/util/Const";
import { getEnum } from "models/util/Const";

class Match implements Model
{
  static getMType = (val: string): MType => getEnum(MType, val, MType.LEAGUE);

  id: number;
  date: Date;
  type: MType;
  visitor: Team;
  local: Team;
  scores: Score[];

  constructor(id: number)
  {
    this.id = id;
  }

  build(attrs: { date: Date, type: MType, visitor: Team, local: Team, scores: Score[] }): Match
  {
    this.date = attrs.date;
    this.type = attrs.type;
    this.visitor = attrs.visitor;
    this.local = attrs.local;
    this.scores = attrs.scores;
    return this;
  }
}

export default Match;