

let testerName = "Nihal";                 // String
let totalAssignments = 10;                // Number
let isCourseCompleted = false;            // Boolean
let bigNumber = 9007199254740991n;        // BigInt
let undefinedVar;                         // Undefined
let nullVar = null;                       // Object (Special JS behavior)
let uniqueId = Symbol("id");              // Symbol

console.log("       JAVASCRIPT TYPE CHECKING");

// 2. Printing the value and its type
console.log("Value: " + testerName + " | Type: " + typeof testerName);
console.log("Value: " + totalAssignments + " | Type: " + typeof totalAssignments);
console.log("Value: " + isCourseCompleted + " | Type: " + typeof isCourseCompleted);
console.log("Value: " + bigNumber + " | Type: " + typeof bigNumber);
console.log("Value: " + undefinedVar + " | Type: " + typeof undefinedVar);
console.log("Value: " + nullVar + " | Type: " + typeof nullVar);
console.log("Value: " + uniqueId.toString() + " | Type: " + typeof uniqueId);