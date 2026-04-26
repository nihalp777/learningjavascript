
// Test Suite Details
const testSuiteName = "Smoke Test - Playwright Regression";
let totalTests = 50;
let passedTests = 42;
let failedTests = 8;

// Pass Test percent
let passRate = (passedTests / totalTests) * 100;

// Logical Check
// This will be true only if failedTests is exactly 0
let allTestsPassed = failedTests === 0;

console.log("==========================================");
console.log("          TEST METRICS DASHBOARD");
console.log("==========================================");
console.log("Suite Name:     " + testSuiteName);
console.log("");

console.log("Total Tests:    " + totalTests);
console.log("Passed:         " + passedTests);
console.log("Failed:         " + failedTests);
console.log("Pass Rate:      " + passRate + "%");
console.log("");

console.log("--- Summary Status ---");
console.log("All Tests Passed: " + allTestsPassed);

console.log("==========================================");
console.log("Report Generated Successfully!");
console.log("==========================================");
