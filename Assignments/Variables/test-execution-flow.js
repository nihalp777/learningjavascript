
// Constant variables (Values that don't change)
const testName = "Login Functionality Test";
const testerName = "Priya";
const testDuration = "2.5 seconds";

// Let variables (Values that will be updated)
let stepNumber = 1;
let testStatus = "IN PROGRESS";
let finalResult = "PENDING";

console.log("==========================================");
console.log("      TEST EXECUTION FLOW");
console.log("==========================================");
console.log("Test Name: " + testName);
console.log("Tester: " + testerName);
console.log("");

// Step 1
console.log("Step " + stepNumber + ": Opening browser");
console.log("Status: " + testStatus);
console.log("");

// Step 2
stepNumber = 2; // Incrementing the step
console.log("Step " + stepNumber + ": Navigating to login page");
console.log("Status: " + testStatus);
console.log("");

// Step 3
stepNumber = 3;
console.log("Step " + stepNumber + ": Entering credentials");
console.log("Username: testuser@example.com");
console.log("Status: " + testStatus);
console.log("");

// Step 4
stepNumber = 4;
console.log("Step " + stepNumber + ": Clicking login button");
console.log("Status: " + testStatus);
console.log("");

// Step 5
stepNumber = 5;
testStatus = "COMPLETED"; // Updating the status
finalResult = "PASSED";   // Setting the final result
console.log("Step " + stepNumber + ": Verifying dashboard");
console.log("Status: " + testStatus);
console.log("");

console.log("==========================================");
console.log("Final Status: " + finalResult);
console.log("Test Duration: " + testDuration);
console.log("==========================================");