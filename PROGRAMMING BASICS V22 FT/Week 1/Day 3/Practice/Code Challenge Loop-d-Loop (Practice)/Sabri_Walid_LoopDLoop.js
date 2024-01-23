// How do we know we need a loop here?
// there is a repetitive task to do for a certain number of times.
// What's the starting point of the loop?
// the treadmill mileage is at two miles.
// When should the loop stop?
// the treadmill mileage is at six miles.
// How will the loop know when to stop?
// test if the value of the treadmill mileage reaches the six mile checkpoint.
// What's incrementing for each iteration of the loop?
// the treadmill mileage.
// What variables do we need?
// the treadmill mileage, the value of the stop mileage, the value of 
// mileage for which the IoT device pops out a piece of candy.

var cycle = 2;
for(var m = 2; m<=6; m+= cycle){console.log("candy!");}