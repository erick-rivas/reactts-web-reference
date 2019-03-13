import Model from "models/util/Model";
import Player from "models/Player";

class Score implements Model
{ 
  id: number;
  min: number;
  matchId: number;
  player: Player;

  constructor(id: number)
  {
    this.id = id;
  }

  build(attrs: { min: number, matchId: number, player: Player }): Score
  {
    this.min = attrs.min;
    this.matchId = attrs.matchId;
    this.player = attrs.player;
    return this;
  }
}

export default Score;