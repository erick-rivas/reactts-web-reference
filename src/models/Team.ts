import Model from "models/util/Model";
import Player from "models/Player";

class Team implements Model
{ 
  id: number;
  name: string;
  logoUrl: string;
  players: Player[];

  constructor(id: number)
  {
    this.id = id;
  }

  build(attrs: { name: string, logoUrl: string, players: Player[] }): Team
  {
    this.name = attrs.name;
    this.logoUrl = attrs.logoUrl;
    this.players = attrs.players;
    return this;
  }
}

export default Team;