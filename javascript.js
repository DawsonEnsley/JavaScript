//var price = 15.00; // price of item
//var money = 20.00; // total money
//
//if (money >= price) {
//    console.log("buy the item");
//} else {
//    console.log("don't buy the item");
//}


//var runner = "Lane";
//var position = 2;
//var medal;
//
//if(position === 1) {
//  medal = "gold";
//} else if(position === 2) {
//  medal = "silver";
//} else if(position === 3) {
//  medal = "bronze";
//} else {
//  medal = "pat on the back";
//}
//
//console.log(runner + " received a " + medal + " medal.");


//var number1 = 2
//var number2 = 3
//
//if (0 === number1 % 2) {
//    console.log("even")
//} else {
//    console.log("odd")
//}


//var musicians = 1;
//
//if (musicians <= 0) {
//    console.log("not a group")
//} else if (musicians === 1) {
//    console.log("solo")
//} else if (musicians === 2) {
//    console.log("duet")
//} else if (musicians === 3) {
//    console.log("trio")
//} else if (musicians === 4) {
//    console.log("quartet")
//} else if (musicians >= 5) {
//    console.log("this is a large group")
//}


/* TESTING LOGIC */
//var room = "billiards room";
//var suspect = "Mr. Parkes";
//
//var weapon = "";  // Initial value
// A boolean variable `solved` will tell us the status of mystery
// true --> solved and false --> unsolved
//var solved = false;
//
//if (room === 'ballroom' && suspect==="Mr. Kalehoff") {
//    weapon = 'poison';
//    solved = true;
//}
//else if (room === 'gallery' && suspect==="Ms. Van Cleve") {
//    weapon = 'trophy';
//    solved = true;
//}
//else if (room === 'billiards room' && suspect === "Mrs. Sparr") {
//    weapon = 'pool stick';
//    solved = true;
//}
//else if (room === 'dining room' && suspect === "Mr. Parkes") {
//    weapon = 'knife';
//    solved = true;
//}
// The code below will run only when `solved` is true
//if (solved) {
//    console.log(suspect + " did it in the "+ room +" with the "+weapon+"!");
//}


//var balance = 325.00;
//var checkBalance = true;
//var isActive = true;
//
//
//if (checkBalance === true) {
//    if (isActive === true && balance > 0) {
//        console.log("Your balance is $" + balance.toFixed(2) + ".");
//    }
//    else if (isActive === true && balance === 0){
//        console.log("Your account is empty.");
//    }
//    else if (isActive === true && balance < 0){
//        console.log("Your balance is negative. Please contact bank.");
//    }
//    else if (isActive === false) {
//        console.log("Your account is no longer active.");
//    }
//}
//else {
//  console.log("Thank you. Have a nice day!");
//}


//var flavor = "vanilla";
//var vessel = "bowl";
//var toppings = "sprinkles";
//
//if ((flavor === "vanilla" || flavor === "chocolate")
//    && (vessel === "bowl" || vessel === "cone")
//    && (toppings === "sprinkles" || toppings === "peanuts")) {
//    console.log("I'd like two scoops of " + flavor + " ice cream in a "
//    + vessel + " with " + toppings + ".")
//    }


// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
//var shirtWidth = 21;
//var shirtLength = 99;
//var shirtSleeve = 8.40;
//
//var size = "NA";
//
//if ((shirtWidth>=18 && shirtWidth<20) && (shirtLength>=28 && shirtLength<29) && (shirtSleeve>=8.13 && shirtSleeve<8.38) ) {
//    size = "S";
//}
//else if ((shirtWidth>=20 && shirtWidth<22) && (shirtLength>=29 && shirtLength<30) && (shirtSleeve>=8.38 && shirtSleeve<8.63) ) {
//    size = "M";
//}
//else if ((shirtWidth>=22 && shirtWidth<24) && (shirtLength>=30 && shirtLength<31) && (shirtSleeve>=8.63 && shirtSleeve<8.88) ) {
//    size = "L";
//}
//else if ((shirtWidth>=24 && shirtWidth<26) && (shirtLength>=31 && shirtLength<33) && (shirtSleeve>=8.88 && shirtSleeve<9.63) ) {
//    size = "XL";
//}
//else if ((shirtWidth>=26 && shirtWidth<28) && (shirtLength>=33 && shirtLength<34) && (shirtSleeve>=9.63 && shirtSleeve<10.13) ) {
//    size = "2XL";
//}
//else if ((shirtWidth>=28) && (shirtLength>=34) && (shirtSleeve>=10.13) ) {
//    size = "3XL";
//}
//else {
//    size = "NA";
//}
//console.log(size);


//conditional ? (if condition is true) : (if condition is false)
//var isGoing = true;
//var color = isGoing ? "green" : "red";
//console.log(color);

//var eatsPlants = true;
//var eatsAnimals = false;
//var category = eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals ? "carnivore" : "undefined");
//
//console.log(category);
//
//var tier = "nsfw deck";
//var output = "You’ll receive "
//
//switch (tier) {
//  case "deck of legends":
//    output += "a custom card, ";
//  case "collector's deck":
//    output += "a signed version of the Exploding Kittens deck, ";
//  case "nsfw deck":
//    output += "one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ";
//  default:
//    output += "one copy of the Exploding Kittens card game.";
//}
//
//console.log(output);

//var education = 'high school diploma';
//var salary = "0"
//// set the value of this based on a person's education
//
//switch (education) {
//    case "no high school diploma":
//        salary = "$25,636/year";
//        break;
//    case "high school diploma":
//        salary = "$35,256/year";
//        break;
//    case "an Associate's Degree":
//        salary = "$41,496/year";
//        break;
//    case "a Bachelor's Degree":
//        salary = "$59,124/year";
//        break;
//    case "a Master's Degree":
//        salary = "$69,732/year";
//        break;
//    case "a Professional Degree":
//        salary = "$89,960/year";
//        break;
//    case "a Doctoral Degree":
//        salary = "$84,396/year";
//}
//
//console.log("In 2015, a person with "+education+" earned an average of "+salary+".");


//var x = 1;
//
//// while loop with a stop condition
//while (x <= 20) {
//    if (x % 3 === 0 && x % 5 === 0) {
//        console.log("JuliaJames");
//    }else if (x % 5 === 0) {
//        console.log("James");
//    }else if (x % 3 === 0) {
//        console.log("Julia");
//    }
//    else {
//        console.log(x);
//    }
//    // increment x at the end of each loop
//    x = x + 1 ;
//}


//var num = 99;
//
//while (num >=1) {
//    // Last iteration. Note occurrences of bottle, bottle, bottleS
//    if (num === 1) {
//        console.log(num + " bottle of juice on the wall! "
//                    + num + " bottle of juice! Take one down, pass it around... "
//                    + (num-1) + " bottles of juice on the wall!");
//    }
//    // Second-last iteration. Note occurrences of bottleS, bottleS, bottle
//    else if (num === 2){
//        console.log(num + " bottles of juice on the wall! "
//                    + num + " bottles of juice! Take one down, pass it around... "
//                    + (num-1) + " bottle of juice on the wall!");
//    }
//    // All other iterations. Note occurrences of bottleS, bottleS, bottleS
//    else {
//        console.log(num + " bottles of juice on the wall! "
//                    + num + " bottles of juice! Take one down, pass it around... "
//                    + (num-1) + " bottles of juice on the wall!");
//    }
//    num = num - 1;
//}


//// Let us take an iteration variable, that represent the remaining Time in seconds
//n = 60
//
//
//// While loop with a stop condition
//while (n >= 0) {
//    if (n === 50) {
//        console.log("Orbiter transfers from ground to internal power");
//    }
//    else if (n === 31) {
//        console.log("Ground launch sequencer is go for auto sequence start");
//    }
//    else if (n === 16) {
//        console.log("Activate launch pad sound suppression system");
//    }
//    else if (n === 10) {
//        console.log("Activate main engine hydrogen burnoff system");
//    }
//    else if (n === 6) {
//        console.log("Main engine start");
//    }
//    else if (n === 0) {
//        console.log("Solid rocket booster ignition and liftoff!");
//    }
//    else{
//        console.log("T-"+n+" seconds");
//    }
//
//    //Never forget to decrement/increment the iteration variable in a while loop
//    // Otherwise, you loop will run infinite iterations
//    n = n-1;
//}

for ( start; stop; step ) {
  // do this thing
}

for (let x = 0; x <= 100; x = x + 1) {
    for (let y = 0; y <= 25; y = y + 1) {
        console.log(x + "," + y)
    }
}

//Or
var row = 0;  // initial value of the row
var seat = 0; // initial value of the seat within a row

// One loop inside another is called Nested loop.
// Outer `for` loop, to iterate over the rows
for (row = 0; row <= 25; row++){

    // Inner `for` loop, to iterate over the seats within a row
    // In this loop, the value of `row` variable would change only after 100 iterations
    for(seat = 0; seat <= 99; seat++){
        console.log(row+"-"+seat);
    }
}


let solution = 1;

for (let i = 1; i <= 12; i++) {
  solution *= i;
}

console.log(solution);
