class Ninja {
  constructor(name, health = 200, speed = 3, strength = 3) {
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
  }
  sayName = () => console.log(this.name);
  showStats = () => {
    console.log("Name is", this.name);
    console.log("Strength is ", this.strength);
    console.log("Speed is ", this.speed);
    console.log("Health is ", this.health);
  };
  drinkSake = () => {
    this.health = +this.health + 10;
  };
}

class Sensei extends Ninja {
  constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
    super(name, health, speed, strength);
    this.wisdom = wisdom;
  }
  speakWisdom = () => {
    this.drinkSake();
    console.log(
      "What one programmer can do in one month, two programmers can do in two months."
    );
  };
}

lou = new Sensei("lou");
lou.showStats();
lou.speakWisdom();
lou.showStats();
