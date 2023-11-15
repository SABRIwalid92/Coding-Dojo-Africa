// /*
//   Acronyms
//   Create a function that, given a string, returns the string’s acronym
//   (first letter of each word capitalized).
//   Do it with .split first if you need to, then try to do it without
// */

// const strA = "object oriented programming";
// const expectedA = "OOP";

// // The 4 pillars of OOP
// const strB = "abstraction polymorphism inheritance encapsulation";
// const expectedB = "APIE";

// const strC = "software development life cycle";
// const expectedC = "SDLC";

// //- Bonus: ignore extra spaces
// const strD = "  global   information tracker    ";
// // const expectedD = "GIT";

// function Acronyms(str) {
//   var tab_of_string = str.split(" ");
//   var result = "";
//   for (var word of tab_of_string) {
//     if (word) {
//       result += word[0];
//     }
//   }
//   result = result.toUpperCase();
//   return result;
// }
// console.log(Acronyms(strA));
// console.log(Acronyms(strD));

var i = str.length;
var result = "";
while (i > 0) {
  i--;
  if (str[i] === " " && str[i + 1] !== " ") {
    result += str[i + 1];
  }
}
