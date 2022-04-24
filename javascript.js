// What is in a for loop?
//for ( start; stop; step ) {
  // do this thing
//}

//for (let x = 0; x <= 100; x = x + 1) {
//    for (let y = 0; y <= 25; y = y + 1) {
//        console.log(x + "," + y)
//    }
//}

//Or
//var row = 0;  // initial value of the row
//var seat = 0; // initial value of the seat within a row

// One loop inside another is called Nested loop.
// Outer `for` loop, to iterate over the rows
//for (row = 0; row <= 25; row++){

    // Inner `for` loop, to iterate over the seats within a row
    // In this loop, the value of `row` variable would change only after 100 iterations
//    for(seat = 0; seat <= 99; seat++){
//        console.log(row+"-"+seat);
//    }
//}


// Factorial Expression
//let solution = 1;
//
//for (let i = 1; i <= 12; i++) {
//  solution *= i;
//}
//
//console.log(solution);

//function findAverage(x, y) {
//  var answer = (x + y) / 2;
//  return answer;
//}
//
//console.log(findAverage(5, 9));


//var sound = "";
//function laugh(num) {
//    for (var x = 0; x < num; x++) {
//        sound = sound + "ha";
//    }
//    sound = sound + "!";
//    return sound;
//}
//
//console.log(laugh(4));

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var x = 1; x <= length; x++) {
        line += "*";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
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


// DOM Example with Bamba
//const b = document.querySelector('body');
//const heading = document.querySelector(".heading");
//heading.setAttribute('style', "color: red");
//const orderedItems = document.querySelectorAll(".elements");
//const itemByCLassName = document.getElementByClassName("elements");
//orderedItems.forEach(element => {
//    element.setAttribute("style", "color: blue");
//})
//const p3 = document.getElementById("p3");
//const p-3 = document.querySelector("#p-3");
//const allP = document.getElementByTagName("p");
//const ol-1 = document.getElementById("ol-1")
//const li-6 = document.createElement("li");
//li-6.textContent = "item added dynamically";
//ol-1.appendChild(li-6);
//b.style.backgroundColor = '1cc';
