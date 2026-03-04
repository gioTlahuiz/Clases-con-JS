/*
Experiment with allowing the player to have an inventory of items.
    * Try adding methods to add or remove items from an inventory.
    * How can you keep track of the quantity of each item? What **data structure** would you need for this?
*/

export class Player {
    constructor(name,item) {
      this.name = name;
      this.item = item;
      this.inventory = [];
    }

    addInventory(item){
      this.inventory.push(item);
      return this.inventory;
    };
  
    removeInventory(item) {
  const index = this.inventory.indexOf(item);

  if (index !== -1) {
    this.inventory.splice(index, 1);
  }

  return this.inventory;
}

    printInventory(){
      console.log(this.inventory);
    };
    
  }

  const input = process.argv[2];

  if (input == '7') {
    const player = new Player("Grog","socks");
  
    player.addInventory("Socks");
    player.addInventory("T-shirt");
    player.addInventory("Tenis");
    player.removeInventory("Socks");
  
    player.printInventory();   
  }
