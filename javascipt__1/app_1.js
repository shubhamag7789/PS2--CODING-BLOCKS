let x = 99;
let y = 100;
let z = x + y;

// Example of string
let firstName = "John";
let lastName = "Doe";

// Example of boolean
let isActive = true;

// Example of undefined
let myVar; // Declared but not initialized
// Example of null
let myNullVar = null; // Explicitly set to null

// Example of symbol
let mySymbol = Symbol("description"); // Unique and immutable value
// Example of BigInt    
let bigIntValue = BigInt(123456789012345678901234567890); // Large integer value

// Check datatype of variables
typeof x; // Output: "number"
typeof firstName; // Output: "string"


// OBJECTS
// Objects are collections of key-value pairs, where keys are strings (or Symbols) and values can be any datatype.
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true,
};

// Accessing object properties
console.log(person.firstName); // Output: John
console.log(person["lastName"]); // Output: Doe
// Adding a new property to an object
person.city = "New York"; // Adding a new property
// Deleting a property from an object  
delete person.age; // Deletes the 'age' property
// Iterating over object properties


// Scope of variables - var, let, and const

// example of var
var globalVar = 10; // Can be accessed anywhere
var globalVar = 15; // Re-declaring var in the same scope is allowed
{
    var globalVar = 20; // Re-declaring var in a block scope is allowed, but it affects the global variable
    console.log(globalVar); // Output: 20
}
console.log(globalVar); // Output: 20
let num1 = 42; // Integer
let num2 = 3.14; // Float   
let num3 = 0; // Zero
let num4 = -7; // Negative number
let num5 = Infinity; // Positive infinity
let num6 = -Infinity; // Negative infinity
let num7 = NaN; // Not a Number (e.g., result of 0/0 or Math.sqrt(-1)
let num8 = 1e6; // Scientific notation (1 million)

// Number methods
Number.MAX_SAFE_INTEGER // The maximum safe integer in JavaScript, Output: 9007199254740991
Number.MIN_SAFE_INTEGER // The minimum safe integer in JavaScript, Output: -9007199254740991
Number.isInteger(num1); // Checks if num1 is an integer, Output: true
Number.isFinite(num2); // Checks if num2 is a finite number, Output: true
Number.isNaN(num7); // Checks if num7 is NaN, Output: true

// Number conversion    
let strNum = "123.45";
let convertedNum = Number(strNum); // Converts string to number, Output: 123.45
let floatNum = parseFloat(strNum); // Converts string to float, Output: 123.45
let intNum = parseInt(strNum); // Converts string to integer, Output: 123


// Random number generation
Math.random(); // Generates a random number between 0 (inclusive) and 1 (exclusive)
Math.floor(Math.random() * 100); // Generates a random integer between 0 and 99
Math.floor(Math.random() * 10+5); // Generates a random integer between 5 and 14


// Undefined and null
// Undefined is a type that indicates a variable has been declared but not assigned a value.
// Null is a type that indicates a variable has been explicitly set to have no value.

let undefinedVar; // This variable is declared but not initialized, so it is undefined
let nullVar = null; // This variable is explicitly set to null