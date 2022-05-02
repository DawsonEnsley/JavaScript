/*
// Example text for Add Event Listeners
//<event-target>.addEventListener(<event-to-listen-for>, <function-to-run-when-an-event-happens>);
const mainHeading = document.querySelector("h1");

mainHeading.addEventListener("click", function() {
    console.log("The Heading was clicked!");
});

document.addEventListener("click", function() {
    const mainHeading = document.querySelector("h1");

    mainHeading.style.backgroundColor = "red";
})
// Example text for Remove Event Listener
//<event-target>.removeEventListener(<event-to-listen-for>, <function-to-remove>);
function myEventListeningFunction() {
    console.log('howdy');
}
// adds a listener for clicks, to run the `myEventListeningFunction` function
document.addEventListener('click', myEventListeningFunction);
// immediately removes the click listener that should run the `myEventListeningFunction` function
document.removeEventListener('click', myEventListeningFunction);

document.body.addEventListener("keypress", function() {
    console.log("removing first child");
    document.querySelector("#contain-all").firstElement.remove();
});

// Example Event Listener with Object
document.addEventListener("click", function(event) {
    console.log(event);
});

// The Default Action Example
const links = document.querySelectorAll('a');
const thirdLink = links[2];

thirdLink.addEventListener('click', function (event) {
    event.preventDefault();
    console.log("Look, ma! We didn't navigate to a new page!");
});

const myCustomDiv = document.createElement('div');

function respondToTheClick(event) {
    console.log('A paragraph was clicked: ' + event.target.textContent);
}

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);

myCustomDiv.addEventListener('click', respondToTheClick);

// check using capital letters
if (evt.target.nodeName === 'SPAN') {
    console.log('A span was clicked with text ' + evt.target.textContent);
}

> // convert nodeName to lowercase
if (evt.target.nodeName.toLowerCase() === 'span') {
    console.log('A span was clicked with text ' + evt.target.textContent);
}

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