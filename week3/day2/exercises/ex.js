const people = ["Greg", "Mary", "Devon", "James"];

// people.splice(0,1) q1

// people[3] = "Jason"; q2

// people.push("hamza"); q3

// const index = people.indexOf("Mary") q4
// console.log(index)

// const people1 = ["Mary", "Devon", "Jason", "hamza"]; q5
// const copy = people1.slice(1, 3);
// console.log(copy)

// const index = people.indexOf("Foo") q6: when you chose value thats doesnt exist it give u -1
// console.log(index)

// let last = people[people.length-1]; q7
// console.log(last)

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i])
// } part II Q1

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i]);
//   if (people[i] === "Devon") {
//     break;
//   }
// } part II Q2

//---------------------------------------------------------------------------------------------------------------

// ex2

// const colors = ["blue", "red", "green", "purple", "orange"]; //q1

// for (let i = 0; i < colors.length; i++) {
//   console.log(`My #${i + 1} choice is ${colors[i]}`);
// } q2 


// for (let i = 0; i < colors.length; i++) {
//     let suffix = "th";
//     if (i === 0) suffix = "st";
//     else if (i === 1) suffix = "nd";
//     else if (i === 2) suffix = "rd";
//     else if (i === 2) suffix = "rd";

//   console.log(`My #${i + 1}${suffix}  choice is ${colors[i]}`);
// } q3

//--------------------------------------------------------------------------------------------------------------

// ex3

// let number = prompt("enter a number: ")

// while (parseInt(number) < 10){

//     number = prompt("try again... ")

// }
// alert("Thanks! The number you entered is " + number);

// ----------------------------------------------------------------------------------------------------------------
// ex4

// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }

// console.log(building.numberOfFloors)
// console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor)
// console.log(building.nameOfTenants[1]+ " " + "has " + building.numberOfRoomsAndRent.dan[0]+ " " +"rooms")

// const sarahRent = building.numberOfRoomsAndRent.sarah[1];
// const davidRent = building.numberOfRoomsAndRent.david[1];
// const danRent = building.numberOfRoomsAndRent.dan[1];

// if (sarahRent + davidRent > danRent) {
//   building.numberOfRoomsAndRent.dan[1] = 1200;
// }


//ex5


// const family = {
//   father: "John",
//   mother: "Alice",
//   son: "Ben",
//   daughter: "Emily"
// };


// console.log("Keys:");
// for (let key in family) {
//   console.log(key);
// }


// console.log("Values:");
// for (let key in family) {
//   console.log(family[key]);
// }


//ex6

// const details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'reindeer'
// };

// let sentence = "";
// for (let key in details) {
//   sentence += key + " " + details[key] + " ";
// }

// console.log(sentence.trim()); 

//ex7


// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// const SecretG = names.map(name => name[0]);

// SecretG.sort();

// const secreteName = SecretG.join('');

// console.log(secreteName)