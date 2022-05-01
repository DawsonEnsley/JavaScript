/*
    What is in a for loop?
for ( start; stop; step ) {
   do this thing
}

for (let x = 0; x <= 100; x = x + 1) {
    for (let y = 0; y <= 25; y = y + 1) {
        console.log(x + "," + y)
    }
}

Or
var row = 0;  // initial value of the row
var seat = 0; // initial value of the seat within a row

 One loop inside another is called Nested loop.
 Outer `for` loop, to iterate over the rows
for (row = 0; row <= 25; row++){

     Inner `for` loop, to iterate over the seats within a row
     In this loop, the value of `row` variable would change only after 100 iterations
    for(seat = 0; seat <= 99; seat++){
        console.log(row+"-"+seat);
    }
}
*/


// Factorial Expression
/*
let solution = 1;

for (let i = 1; i <= 12; i++) {
  solution *= i;
}

console.log(solution);

function findAverage(x, y) {
  var answer = (x + y) / 2;
  return answer;
}

console.log(findAverage(5, 9));
*/

/*
var sound = "";
function laugh(num) {
    for (var x = 0; x < num; x++) {
        sound = sound + "ha";
    }
    sound = sound + "!";
    return sound;
}

console.log(laugh(4));
*/

// anonymous function expression
/*
var sound = "";
var laugh = function(num) {
    for (var x = 0; x < num; x++) {
        sound = sound + "ha";
    }
    sound += "!";
    return sound;
}

console.log(laugh(10));
*/


// creates a line of * for a given length
/*
function makeLine(length) {
    var line = "";
    for (var x = 1; x <= length; x++) {
        line += "*";
    }
    return line + "\n";
}
*/


// your code goes here.  Make sure you call makeLine() in your own code.
/*
function buildTriangle(length) {
    // Let's build a huge string equivalent to the triangle
    var triangle = "";
    //Let's start from the topmost line
    var lineNumber = 1;
    for (lineNumber = 1; lineNumber <= length; lineNumber++) {
        // We will not print one line at a time.
        // Rather, we will make a huge string that will comprise the whole triangle
        triangle = triangle + makeLine(lineNumber);
    }
    return triangle;
}
console.log(buildTriangle(10));
*/


// anonymous function expression
/*
var doSomething = function(y) {
  return y + 1;
};

 named function expression
var doSomething = function addOne(y) {
  return y + 1;
};

 Example
var cry = function wah() {
    // var sound = "boohoo!";
    // return sound;
    return "boohoo!"
    };

console.log(cry());
*/

// Function expression that assigns the function displayFavorite
// to the variable favoriteMovie
/*
var favoriteMovie = function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
};

// function declaration that takes in two arguments: a function for displaying
 a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// call the movies function, pass in the function and name of movie
movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");

// Example Inline function expression
 emotions() function definition
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// Call the emotions() function with two arguments
 Argument 1 - "happy" string
 Argument 2 - an inline function expression
emotions ("happy", function(num) {
    var sound = ""; // Local variable
    //Iterate
    for (var i = 0 ; i < num ; i++) {
        sound = sound + "ha" ;
    }
    sound = sound +"!";
    return sound;
});
*/


/*
var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

function hasEnoughPlayers(numPlayers) {
    if (numPlayers.length >= 7)
        return true; // true is a boolean value. Do not return a string "true"
    else
        return false; // false is also a boolean value. Do not return a string "false"
}
console.log(hasEnoughPlayers(team));


var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

// the variable `i` is used to step through each element in the array
for (var i = 0; i < donuts.length; i++) {
    donuts[i] += " hole";
    donuts[i] = donuts[i].toUpperCase();
}

words = ["cat", "in", "hat"];
words.forEach(function(word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
});

// Inline forEach Example
var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];
*/

/*
test.forEach(function(item, index){
    if(item%3===0){
        // The commented statements below would not be able to change the value of item
        // because the `item` is a COPY of actual element, while actual is test[index]
        // item = item + 100;
        // console.log("The updated element is "+item+" and actual is "+test[index]);
        test[index]=test[index]+100;
    }
    //else
    //    console.log("Element "+item+" is not divisible by 3");
});
console.log(test);

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];
*/

/*
// Map Example
// Method 1
var improvedDonuts = donuts.map(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  return donut;
});

var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];
var totals = bills.map(function (element) {
    element *= 1.15;
    element = element.toFixed(2);
    element = Number(element);

    return element;
});

// Method 2
var totals = bills.map(function(element) {
    element *= 1.15;
    return Number(element.toFixed(2));
});
console.log(totals);
*/

/*
var donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"]
];

// here, donutBox.length refers to the number of rows of donuts
for (var row = 0; row < donutBox.length; row++) {
  console.log(donutBox[row]);
}

for (var row = 0; row < donutBox.length; row++) {
  // here, donutBox[row].length refers to the length of the donut array currently being looped over
  for (var column = 0; column < donutBox[row].length; column++) {
    console.log(donutBox[row][column]);
  }
}
*/

/*
var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    // summary: function printAccountSummary(amount) {
    //     var accountSummary = savingsAccount.balance;
    //     console.log("Welcome!")
    //     if (accountSummary >= 0) {
    //         console.log("Your balance is currently " + savingsAccount.accountSummary
    //         + " and your interest rate is " + savingAccount.interestRatePercent + ".")
    //     } else {
    //         return "Your balance is Negative!"
    //     }
    // }
    printAccountSummary: function() {
        return "Welcome!\nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%."
    }
};

console.log(savingsAccount.printAccountSummary());
*/

/*
let facebookProfile = {
    name: "Lane",
    friends: 5,
    messages: ["Hi", "Hello", "Hello There"],
    postMessage: function(message) {
        facebookProfile.messages.push(message)
    },
    deleteMessage: function(index) {
        facebookProfile.messages.splice(index, 1);
    },
    addFriend: function() {
        if (facebookProfile.friends >= 0) {
            facebookProfile.friends += 1
        }
    },
    removeFriend: function() {
        if (facebookProfile.friends > 0) {
            facebookProfile.friends -= 1
        }
    }
}

console.log(facebookProfile);

// This is an array of objects.
var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach(function(donut) {
    console.log(donut.type + " donuts cost $" + donut.cost + " each");
});
*/


// DOM Example with Bamba
/*
const b = document.querySelector('body');
const heading = document.querySelector(".heading");
heading.setAttribute('style', "color: red");
const orderedItems = document.querySelectorAll(".elements");
const itemByCLassName = document.getElementByClassName("elements");
orderedItems.forEach(element => {
    element.setAttribute("style", "color: blue");
})
const p3 = document.getElementById("p3");
const p-3 = document.querySelector("#p-3");
const allP = document.getElementByTagName("p");
const ol-1 = document.getElementById("ol-1")
const li-6 = document.createElement("li");
li-6.textContent = "item added dynamically";
ol-1.appendChild(li-6);
b.style.backgroundColor = '1cc';
*/