
const symbol1 = Symbol("testId");
const symbol2 = Symbol("testId");

// Compare symbols (Uniqueness check)
console.log("==========================================");
console.log("          SYMBOL UNIQUENESS TEST");
console.log("==========================================");
console.log("Symbol 1 === Symbol 2: " + (symbol1 === symbol2)); // Results in false
console.log("");

// Print typeof
console.log("Type of symbol1: " + typeof symbol1);
console.log("Type of symbol2: " + typeof symbol2);
console.log("");

// Print .description
console.log("Symbol 1 Description: " + symbol1.description);
console.log("Symbol 2 Description: " + symbol2.description);
console.log("");

// Bonus: Using Symbols as Object Keys
const testResults = {};

// Using the symbols as unique keys
testResults[symbol1] = "Login Test Passed";
testResults[symbol2] = "Checkout Test Failed";

console.log("--- Object Verification ---");
console.log("Value at Symbol 1: " + testResults[symbol1]);
console.log("Value at Symbol 2: " + testResults[symbol2]);

// Notice that the object has TWO distinct entries, even though both keys look like "testId"
console.log("Number of keys in object: " + Object.getOwnPropertySymbols(testResults).length);
console.log("==========================================");