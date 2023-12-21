class Ninja {
  constructor(name, health = 90, speed = 3, strength = 3) {
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
  }
  sayName = () => console.log(this.name);
  showStats = () => {
    console.log("Name is ", this.name);
    console.log("Strength is ", this.strength);
    console.log("Speed is ", this.speed);
    console.log("Health is ", this.health);
  };
  drinkSake = () => {
    this.health = 10 + this.health;
  };
}
lou = new Ninja("lou");
lou.showStats();
lou.drinkSake();
lou.showStats();
