import Generator from "models/util/Generator";
import Match from "models/Match";
import Player from "models/Player";
import Score from "models/Score";
import Team from "models/Team";
import User from "models/User";
import { MType } from "models/util/Const";

class Mocks
{
  static Match()
  {
    return [
      new Match(8315659).build({ date: new Date("Mon Mar 11 2019 11:51:14 GMT-0600 (Central Standard Time)"), type: MType.LEAGUE, visitor: this.Team()[1], local: this.Team()[9], scores: [this.Score()[2], this.Score()[9]] }),
      new Match(6554188).build({ date: new Date("Mon Mar 11 2019 20:58:58 GMT-0600 (Central Standard Time)"), type: MType.LEAGUE, visitor: this.Team()[7], local: this.Team()[1], scores: [this.Score()[14], this.Score()[14]] }),
      new Match(1900820).build({ date: new Date("Mon Mar 11 2019 21:41:01 GMT-0600 (Central Standard Time)"), type: MType.LEAGUE, visitor: this.Team()[5], local: this.Team()[14], scores: [this.Score()[14], this.Score()[9]] }),
      new Match(4942314).build({ date: new Date("Mon Mar 11 2019 11:57:04 GMT-0600 (Central Standard Time)"), type: MType.CUP, visitor: this.Team()[12], local: this.Team()[14], scores: [this.Score()[3], this.Score()[12]] }),
      new Match(2900710).build({ date: new Date("Mon Mar 11 2019 09:55:35 GMT-0600 (Central Standard Time)"), type: MType.LEAGUE, visitor: this.Team()[11], local: this.Team()[12], scores: [this.Score()[12], this.Score()[12]] }),
      new Match(8427000).build({ date: new Date("Mon Mar 11 2019 18:19:45 GMT-0600 (Central Standard Time)"), type: MType.LEAGUE, visitor: this.Team()[10], local: this.Team()[5], scores: [this.Score()[7], this.Score()[9]] }),
      new Match(1500823).build({ date: new Date("Mon Mar 11 2019 10:11:18 GMT-0600 (Central Standard Time)"), type: MType.CUP, visitor: this.Team()[8], local: this.Team()[3], scores: [this.Score()[6], this.Score()[3]] }),
      new Match(7569622).build({ date: new Date("Mon Mar 11 2019 07:58:09 GMT-0600 (Central Standard Time)"), type: MType.CUP, visitor: this.Team()[12], local: this.Team()[9], scores: [this.Score()[11], this.Score()[5]] })
    ];
  }

  static Player()
  {
    return [
      new Player(8116540).build({ name: "Alejandro Arribas", photoUrl: "https://s3.amazonaws.com/lmxwebsite/media/wpagephotos/69/2/130068/130068.jpg?rnd=201939", teamId: 1 }),
      new Player(4964428).build({ name: "Pablo Barrera", photoUrl: "https://s3.amazonaws.com/lmxwebsite/media/wpagephotos/69/2/34996/34996.jpg?rnd=201939", teamId: 1 }),
      new Player(4648287).build({ name: "Agustín Marchesí", photoUrl: "https://s3.amazonaws.com/lmxwebsite/media/wpagephotos/69/2/109037/109037.jpg?rnd=201939", teamId: 2 }),
      new Player(3496797).build({ name: "Oribe Peralta", photoUrl: "https://s3.amazonaws.com/lmxwebsite/media/wpagephotos/69/2/33927/33927.jpg?rnd=201939", teamId: 2 }),
      new Player(980254).build({ name: "Jair Pereira", photoUrl: "https://s3.amazonaws.com/lmxwebsite/media/wpagephotos/69/2/47204/47204.jpg?rnd=201939", teamId: 3 }),
      new Player(5770550).build({ name: "Alan Pulido", photoUrl: "https://s3.amazonaws.com/lmxwebsite/media/wpagephotos/69/2/65740/65740.jpg?rnd=201939", teamId: 3 }),
      new Player(8700354).build({ name: "André Gignac", photoUrl: "https://s3.amazonaws.com/lmxwebsite/media/wpagephotos/69/2/111171/111171.jpg?rnd=201939", teamId: 4 }),
      new Player(8553469).build({ name: "Jurgen Damn", photoUrl: "https://s3.amazonaws.com/lmxwebsite/media/wpagephotos/69/2/78294/78294.jpg?rnd=201939", teamId: 4 }),
      new Player(3548700).build({ name: "Jesús Corona", photoUrl: "https://s3.amazonaws.com/lmxwebsite/media/wpagephotos/69/2/17149/17149.jpg?rnd=201939", teamId: 5 }),
      new Player(3469855).build({ name: "Elías Hernández", photoUrl: "https://s3.amazonaws.com/lmxwebsite/media/wpagephotos/69/2/47256/47256.jpg?rnd=201939", teamId: 5 })
    ];
  }

  static Score()
  {
    return [
      new Score(6563342).build({ min: 86, matchId: 46, player: this.Player()[1] }),
      new Score(2006078).build({ min: 26, matchId: 44, player: this.Player()[6] }),
      new Score(3053211).build({ min: 96, matchId: 9, player: this.Player()[11] }),
      new Score(4192398).build({ min: 43, matchId: 48, player: this.Player()[10] }),
      new Score(4751343).build({ min: 49, matchId: 14, player: this.Player()[4] }),
      new Score(3856386).build({ min: 41, matchId: 25, player: this.Player()[12] }),
      new Score(6935798).build({ min: 56, matchId: 53, player: this.Player()[8] }),
      new Score(3972708).build({ min: 92, matchId: 1, player: this.Player()[0] })
    ];
  }

  static Team()
  {
    return [
      new Team(1).build({ name: "Pumas UNAM", logoUrl: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/18/18.png", players: [this.Player()[13], this.Player()[5]] }),
      new Team(2).build({ name: "América", logoUrl: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/1/1.png", players: [this.Player()[14], this.Player()[14]] }),
      new Team(3).build({ name: "Chivas", logoUrl: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/7/7.png", players: [this.Player()[11], this.Player()[3]] }),
      new Team(4).build({ name: "Tigres", logoUrl: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/16/16.png", players: [this.Player()[0], this.Player()[8]] }),
      new Team(5).build({ name: "Cruz Azul", logoUrl: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/6/6.png", players: [this.Player()[6]] }),
    ];
  }

  static User()
  {
    return [
      new User(491159).build({ email: "Pauline_Schumm80@yahoo.com", password: "eligendi" }),
    ];
  }
}
export default Mocks;