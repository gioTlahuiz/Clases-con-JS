/*
5. Experiment with allowing the player to level up based on gained experience points.
    * An experience point is a **number**. A level up should occur when a player gains enough experience points.
    * Try adding a method to allow a player to gain a given number of experience points.
    * How many experience points should result in a level up? How can you keep track of this number?
*/

export class Player {
    constructor(name,level,experience) {
      this.name = name;
      this.level = level;
      this.experience = experience;
    }
  info(){
    return `The player ${this.name} has the Level ${this.level}!,`
  }

  gainExperience(){
    if(this.experience > 2){
      return `Congratulations!!, you have upgrade your level to ${this.level + this.experience}`
    }else{
      return `Sorry you don´t have enough experience`;
    }
  }
    
  }

const input = process.argv[2];

 if(input == '5'){
      const player = new Player("Grog",4,3);
      console.log(player.info()),
      console.log(player.gainExperience());
    }

