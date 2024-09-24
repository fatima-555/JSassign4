        //IF...ELSE & ELSE IF STATEMENT,
         //TESTING SET OF CONDITIONS
  //01

// Function to check the type of character
function checkCharacterType(char) {
    // Get the ASCII code of the character
    var asciiCode = char.charCodeAt(0);

    // Check if it is a number (0-9)
    if (asciiCode >= 48 && asciiCode <= 57) {
        console.log(`${char} is a number.`);
    }
    // Check if it is an uppercase letter (A-Z)
    else if (asciiCode >= 65 && asciiCode <= 90) {
        console.log(`${char} is an uppercase letter.`);
    }
    // Check if it is a lowercase letter (a-z)
    else if (asciiCode >= 97 && asciiCode <= 122) {
        console.log(`${char} is a lowercase letter.`);
    } 
    else {
        console.log(`${char} is neither a number nor a letter.`);
    }
}

// Example usage
let input = prompt("Enter a character: ");
checkCharacterType(input);

 //02

// Function to compare two integers
function compareIntegers(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is larger than ${num2}`);
    } else if (num2 > num1) {
        console.log(`${num2} is larger than ${num1}`);
    } else {
        console.log(`Both numbers are equal.`);
    }
}

// Example usage
let number1 = parseInt(prompt("Enter the first integer: "));
let number2 = parseInt(prompt("Enter the second integer: "));

// Call the function to compare
compareIntegers(number1, number2);

 //03

// Function to check whether the number is positive, negative, or zero
function checkNumber(num) {
    if (num > 0) {
        console.log(`${num} is a positive number.`);
    } else if (num < 0) {
        console.log(`${num} is a negative number.`);
    } else {
        console.log(`${num} is zero.`);
    }
}

// Example usage
let inputNumber = parseFloat(prompt("Enter a number: "));

// Call the function to check the number
checkNumber(inputNumber);

 //04

// Function to check if a character is a vowel
function isVowel(char) {
    // Convert the character to lowercase for uniform comparison
    char = char.toLowerCase();

    // Check if the character is a vowel
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        return true;
    } else {
        return false;
    }
}

// Example usage
let inputChar = prompt("Enter a single character: ");

// Ensure only single character input
if (inputChar.length === 1) {
    console.log(isVowel(inputChar));  // true if vowel, false otherwise
} else {
    console.log("Please enter a single character.");
}

 //05

// Step a: Store the correct password in a variable
const correctPassword = "mySecret123";

// Step b: Ask the user to enter their password
let userPassword = prompt("Enter your password:");

// Step c: Validate the two passwords

// i. Check if the user has entered a password
if (userPassword === "") {
    console.log("Please enter your password.");
} 
// ii. Check if both passwords are the same
else {
    if (userPassword === correctPassword) {
        console.log("Correct! The password you entered matches the original password.");
    } else {
        console.log("Incorrect password.");
    }
}

 //06

 var greeting;
 var hour = 13;
 
 if (hour < 18) {
     greeting = "Good day";
 } else {
     greeting = "Good evening";
 }
 
 console.log(greeting);  // Outputs: Good day

 //07

// Function to convert 24-hour format to 12-hour format
function convertTime(time) {
    if (time >= 0 && time < 1200) {
        console.log("Good Morning! The time is " + format12HourTime(time) + " AM");
    } else if (time >= 1200 && time < 1700) {
        console.log("Good Afternoon! The time is " + format12HourTime(time) + " PM");
    } else if (time >= 1700 && time < 2100) {
        console.log("Good Evening! The time is " + format12HourTime(time) + " PM");
    } else if (time >= 2100 && time <= 2359) {
        console.log("Good Night! The time is " + format12HourTime(time) + " PM");
    } else {
        console.log("Invalid time input. Please enter a time between 0000 and 2359.");
    }
}

// Helper function to convert 24-hour time to 12-hour time format
function format12HourTime(time) {
    let hours = Math.floor(time / 100);
    let minutes = time % 100;

    // Adjust hours for 12-hour format
    if (hours === 0) {
        hours = 12; // Midnight case
    } else if (hours > 12) {
        hours = hours - 12; // Convert 24-hour format to 12-hour format
    }
    
    // Add leading zero to minutes if needed
    minutes = minutes < 10 ? "0" + minutes : minutes;

    return `${hours}:${minutes}`;
}

// Example usage
let userTime = parseInt(prompt("Enter the time in 24-hour format (e.g., 1900 for 7:00 PM):"));

// Call the function to convert and display the time
convertTime(userTime);

          //ARRAYS

// 1. Declare an empty array using JS literal notation to store student names in future.
let studentNamesLiteral = [];

// 2. Declare an empty array using JS object notation to store student names in future.
let studentNamesObject = new Array();

// 3. Declare and initialize a strings array.
let stringArray = ["Apple", "Banana", "Cherry"];

// 4. Declare and initialize a numbers array.
let numbersArray = [10, 20, 30, 40, 50];

// 5. Declare and initialize a boolean array.
let booleanArray = [true, false, true, false];

// 6. Declare and initialize a mixed array.
let mixedArray = ["Hello", 123, true, "World", false];

// 7. Declare and initialize an array and store available education qualifications in Pakistan.
let educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// Display the education qualifications in the browser
document.write("<h2>Available Education Qualifications in Pakistan:</h2>");
document.write("<ul>");
for (let i = 0; i < educationQualifications.length; i++) {
    document.write(`<li>${educationQualifications[i]}</li>`);
}
document.write("</ul>");


  //08

// Store student names in an array
let studentNames = ["Miceal", "John", "Tony"];

// Store their corresponding scores in another array
var studentScores = [400, 350, 450];

// Assume total marks for each student
let totalMarks = 500;

// Display the scores and percentages for each student
for (let i = 0; i < studentNames.length; i++) {
    let percentage = (studentScores[i] / totalMarks) * 100;
    document.write(`${studentNames[i]} scored ${studentScores[i]} out of ${totalMarks}. Percentage: ${percentage.toFixed(2)}%<br>`);
}

  //09

// Initialize an array with color names
let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];

// Function to display the array in the browser
function displayColors(array, message) {
    document.write(`<h3>${message}</h3>`);
    document.write("<ul>");
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`);
    }
    document.write("</ul>");
}

// a. Ask the user what color to add to the beginning
let addColorToBeginning = prompt("What color do you want to add to the beginning?");
colors.unshift(addColorToBeginning);  // Add color to the beginning
displayColors(colors, "Updated array after adding color to the beginning");

// b. Ask the user what color to add to the end
let addColorToEnd = prompt("What color do you want to add to the end?");
colors.push(addColorToEnd);  // Add color to the end
displayColors(colors, "Updated array after adding color to the end");

// c. Add two more colors to the beginning
colors.unshift("Orange", "Pink");  // Add two colors to the beginning
displayColors(colors, "Updated array after adding two colors to the beginning");

// d. Delete the first color in the array
colors.shift();  // Remove the first color
displayColors(colors, "Updated array after deleting the first color");

// e. Delete the last color in the array
colors.pop();  // Remove the last color
displayColors(colors, "Updated array after deleting the last color");

// f. Ask the user at which index to add a color
let addColorIndex = parseInt(prompt("At which index do you want to add a color?"));
let colorToAdd = prompt("Enter the color name you want to add:");
colors.splice(addColorIndex, 0, colorToAdd);  // Add color at the desired index
displayColors(colors, `Updated array after adding color at index ${addColorIndex}`);

// g. Ask the user at which index and how many colors to delete
let deleteColorIndex = parseInt(prompt("At which index do you want to delete color(s)?"));
let deleteColorCount = parseInt(prompt("How many colors do you want to delete?"));
colors.splice(deleteColorIndex, deleteColorCount);  // Remove colors from the desired index
displayColors(colors, `Updated array after deleting ${deleteColorCount} color(s) from index ${deleteColorIndex}`);

  //10

// Store student scores in an array
var studentScores = [85, 72, 90, 66, 78, 92, 88];

// Display the original scores
document.write("<h3>Original Scores:</h3>");
document.write("<ul>");
for (let i = 0; i < studentScores.length; i++) {
    document.write(`<li>${studentScores[i]}</li>`);
}
document.write("</ul>");

// Sort the array in ascending order
studentScores.sort(function(a, b) {
    return a - b; // For numerical sorting
});

// Display the sorted scores
document.write("<h3>Sorted Scores in Ascending Order:</h3>");
document.write("<ul>");
for (let i = 0; i < studentScores.length; i++) {
    document.write(`<li>${studentScores[i]}</li>`);
}
document.write("</ul>");

  //11

// Initialize an array with city names
let cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "Austin"];

// Create an array to hold selected cities
let selectedCities = [];

// Copy 3 elements from cities array to selectedCities array
for (let i = 0; i < 3; i++) {
    selectedCities.push(cities[i]);
}

// Display the original cities array
document.write("<h3>Original Cities:</h3>");
document.write("<ul>");
for (let i = 0; i < cities.length; i++) {
    document.write(`<li>${cities[i]}</li>`);
}
document.write("</ul>");

// Display the selected cities array
document.write("<h3>Selected Cities:</h3>");
document.write("<ul>");
for (let i = 0; i < selectedCities.length; i++) {
    document.write(`<li>${selectedCities[i]}</li>`);
}
document.write("</ul>");

  //12

// Initialize the array
var arr = ["This ", "is ", "my ", "cat"];

// Create a single string from the array using the join method
var singleString = arr.join(""); // Using an empty string as the separator

// Display the resulting string in the browser
document.write("<h3>Resulting String:</h3>");
document.write(singleString);

  //13

// Create a new array
var fifoQueue = [];

// Function to add values to the queue
function enqueue(value) {
    fifoQueue.push(value); // Add value to the end of the array
    console.log(`Added: ${value}`);
}

// Function to remove values from the queue
function dequeue() {
    if (fifoQueue.length > 0) {
        let removedValue = fifoQueue.shift(); // Remove value from the front of the array
        console.log(`Removed: ${removedValue}`);
    } else {
        console.log("The queue is empty!");
    }
}

// Adding values to the FIFO queue
enqueue("Apple");
enqueue("Banana");
enqueue("Cherry");
enqueue("Date");

// Display current state of the queue
document.write("<h3>Current FIFO Queue:</h3>");
document.write("<ul>");
for (let i = 0; i < fifoQueue.length; i++) {
    document.write(`<li>${fifoQueue[i]}</li>`);
}
document.write("</ul>");

// Removing values from the FIFO queue
dequeue(); // Removes "Apple"
dequeue(); // Removes "Banana"

// Display updated state of the queue
document.write("<h3>Updated FIFO Queue after removing two items:</h3>");
document.write("<ul>");
for (let i = 0; i < fifoQueue.length; i++) {
    document.write(`<li>${fifoQueue[i]}</li>`);
}
document.write("</ul>");

  //14
// Create a new array to store values
var fifoQueue = [];

// Function to add values to the queue
function enqueue(value) {
    fifoQueue.push(value); // Add value to the end of the array
    console.log(`Added: ${value}`);
}

// Function to remove values from the queue
function dequeue() {
    if (fifoQueue.length > 0) {
        let removedValue = fifoQueue.shift(); // Remove value from the front of the array
        console.log(`Removed: ${removedValue}`);
        return removedValue; // Return the removed value
    } else {
        console.log("The queue is empty!");
        return null; // Return null if the queue is empty
    }
}

// Function to display the current state of the queue
function displayQueue() {
    console.log("Current FIFO Queue:");
    console.log(fifoQueue);
}

// Example usage:
enqueue("Apple");
enqueue("Banana");
enqueue("Cherry");

// Display current state of the queue
displayQueue(); // ["Apple", "Banana", "Cherry"]

// Remove a value from the queue
dequeue(); // Removes "Apple"

// Display updated state of the queue
displayQueue(); // ["Banana", "Cherry"]

// Add more values
enqueue("Date");
enqueue("Elderberry");

// Final display of the queue
displayQueue(); // ["Banana", "Cherry", "Date", "Elderberry"]

  //15

// Store phone manufacturers in an array
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Start creating the dropdown/select menu
document.write("<h3>Select Phone Manufacturer:</h3>");
document.write("<select id='phoneManufacturers'>");

// Loop through the manufacturers array to create options
for (var i = 0; i < manufacturers.length; i++) {
    document.write("<option value='" + manufacturers[i] + "'>" + manufacturers[i] + "</option>");
}

// Close the select element
document.write("</select>");



