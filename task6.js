/*
Experiment with allowing constructed player objects to be added to an **array** of party members.
    * How should an array of party members be identified in your code?
    * Try adding methods to add or remove player objects from a given party.
*/

export class Player {
    constructor(name) {
      this.names = name;
      this.members = [];
    }
  addMember(name){
    this.members.push(name);
    return this.members;
  }
  removeMember(name){
    this.members = this.members.filter(member => member.name !== name);
    return this.members;
  }

  printParty(){
    console.log(this.members);
  }

  }

const input = process.argv[2];

if (input == '6') {
  const player = new Player("Grog");

  player.addMember("Grog");
  player.addMember("Vex");
  player.addMember("Ronaldo");
  player.removeMember("Grog");

  player.printParty();   // ["Grog", "Vex"]

  player.printParty();   // ["Vex"]
}