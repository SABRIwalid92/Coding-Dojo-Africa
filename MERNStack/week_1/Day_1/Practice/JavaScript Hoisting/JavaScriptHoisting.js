var hello;
hello = "world";
console.log(hello); //hello

var needle;
needle = "haystack";
function test() {
  var needle = "magnet";
  console.log(needle);
}
test(); //magnet

var brendan;
brendan = "super cool";
function print() {
  brendan = "only okay";
  console.log(brendan); //only okay
}
console.log(brendan); //super cool

var food;
food = "chicken";
console.log(food); //chicken

function eat() {
  var food;
  food = "half-chicken";
  console.log(food);
  food = "gone";
}
eat(); //half-chicken

var mean;
mean(); //mean is not a function
console.log(food);
mean = function () {
  food = "chicken";
  console.log(food);
  var food = "fish";
  console.log(food);
};
console.log(food);

console.log(genre); //undefined
var genre;
genre = "disco";
function rewind() {
  var genre;
  genre = "rock";
  console.log(genre);
  genre = "r&b";
  console.log(genre);
}
rewind(); //rock  //r&b
console.log(genre); //disco

dojo = "san jose";
console.log(dojo); //san jose
function learn() {
  var dojo;
  dojo = "seattle";
  console.log(dojo);
  dojo = "burbank";
  console.log(dojo);
}
learn(); //seattle   //burbank

console.log(dojo); //san jose

function makeDojo(name, students) {
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if (dojo.students > 50) {
    dojo.hiring = true;
  } else if (dojo.students <= 0) {
    dojo = "closed for now";
  }
  return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
//TypeError: Assignment to constant variable.
