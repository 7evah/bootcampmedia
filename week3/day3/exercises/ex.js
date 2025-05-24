
/// ex1
// function displayNumbersDivisible(divisor) {
//   let sum = 0;
//   let divisibleNumbers = [];

//   for (let i = 0; i <= 500; i++) {
//     if (i % divisor === 0) {
//       divisibleNumbers.push(i);
//       sum += i;
//     }
//   }

//   console.log("Numbers divisible by", divisor + ":", divisibleNumbers.join(" "));
//   console.log("Sum:", sum);
// }


// displayNumbersDivisible(3);
// displayNumbersDivisible(45);


//-----------------------------------------------------------------------------------------------
// ex2

// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

// const shoppingList = ["banana", "orange", "apple"];

// function myBill() {
//     let total = 0;

//     for (let item of shoppingList) {
//         if (item in stock && stock[item] > 0) {
//             total += prices[item];     
//             stock[item] -= 1;           
//         }
//     }

//     return total;
// }

// const billTotal = myBill();
// console.log("Total Bill: $" + billTotal.toFixed(2));
// console.log("Updated Stock:", stock);

//--------------------------------------------------------------------------------------------
//ex3

// function changeEnough(itemPrice, amountOfChange) {
//     const coinValues = [0.25, 0.10, 0.05, 0.01]; // quarters, dimes, nickels, pennies
//     let total = 0;

//     for (let i = 0; i < amountOfChange.length; i++) {
//         total += amountOfChange[i] * coinValues[i];
//     }

//     return total >= itemPrice;
// }

// // Examples:
// console.log(changeEnough(4.25, [25, 20, 5, 0]));     
// console.log(changeEnough(14.11, [2, 100, 0, 0]));    
// console.log(changeEnough(0.75, [0, 0, 20, 5]));      

//----------------------------------------------------------------------------------------------------------

//ex4

// function hotelCost() {
//     let nights;
//     const pricePerNight = 140;

    
//     while (true) {
//         nights = prompt("How many nights would you like to stay in the hotel?");
//         nights = Number(nights);

//         if (!isNaN(nights) && nights > 0) {
//             break;
//         }
//         alert("Please enter a valid number of nights.");
//     }

//     return nights * pricePerNight;
// }


// let totalHotelCost = hotelCost();
// console.log("Hotel total cost: $" + totalHotelCost);


// function planeRideCost() {
//     let destination;

//     while (true) {
//         destination = prompt("What is your destination?");
//         if (destination && isNaN(destination)) {
//             break;
//         }
//         alert("Please enter a valid destination.");
//     }

//     destination = destination.trim().toLowerCase();

//     if (destination === "london") {
//         return 183;
//     } else if (destination === "paris") {
//         return 220;
//     } else {
//         return 300;
//     }
// }


// let totalPlaneCost = planeRideCost();
// console.log("Plane ticket cost: $" + totalPlaneCost);


// function rentalCarCost() {
//     let days;


//     while (true) {
//         days = prompt("How many days would you like to rent the car?");
//         days = Number(days);
//         if (!isNaN(days) && days > 0) {
//             break;
//         }
//         alert("Please enter a valid number of days.");
//     }

//     const dailyRate = 40;
//     let totalCost = days * dailyRate;

//     // Apply 5% discount for more than 10 days
//     if (days > 10) {
//         totalCost *= 0.95;
//     }

//     return totalCost;
// }


// let totalRentalCost = rentalCarCost();
// console.log("Rental car cost: $" + totalRentalCost);

//finale
// function totalVacationCost(nights, destination, days) {
//     const hotel = hotelCost(nights);
//     const plane = planeRideCost(destination);
//     const car = rentalCarCost(days);
//     const total = hotel + plane + car;

//     console.log(`The hotel cost: $${hotel}`);
//     console.log(`The plane tickets cost: $${plane}`);
//     console.log(`The car rental cost: $${car}`);
//     console.log(`Total vacation cost: $${total}`);
// }

//------------------------------------------------------------------------------------------------------------------
// ex5

