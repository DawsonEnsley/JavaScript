// Anonymous function expression
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
