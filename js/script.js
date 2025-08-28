
// Part 1: Variables & Conditionals

let userName = "Stacy";
let age = 20;

if (age >= 18) {
    console.log(userName + " is an adult.");
} else {
    console.log(userName + " is a minor.");
}


// Part 2: Custom Functions


// Function 1: Greet a user
function greetUser(name) {
    return "Hello, " + name + "!";
}

// Function 2: Calculate the square of a number
function square(num) {
    return num * num;
}

console.log(greetUser(userName));
console.log("The square of 5 is: " + square(5));

// Part 3: Loops

// Example 1: For loop
for (let i = 1; i <= 5; i++) {
    console.log("For Loop count: " + i);
}

// Example 2: While loop
let count = 1;
while (count <= 3) {
    console.log("While Loop count: " + count);
    count++;
}


// Part 4: DOM Interactions


//  1: Change text on button click
document.getElementById("changeTextBtn").addEventListener("click", function () {
    document.getElementById("message").textContent = "You clicked the button!";
}); 

// 2: Add new Item 

let counter = 1; // start at 1

document.getElementById("addItemBtn").addEventListener("click", function () {
    let newItem = document.createElement("li");
    newItem.textContent = "New Item " + counter; 
    document.getElementById("itemList").appendChild(newItem);
    counter++; 
});

//  3: Change text color dynamically
document.getElementById("message").style.color = "blue";
