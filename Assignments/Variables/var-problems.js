

//  **Step 1 — Hoisting (read a variable before its declaration)**

/*
console.log("Status before declaration: " + testStatus);
var testStatus = "PASSED";
console.log("Status after declaration: " + testStatus);
*/

/*
Result:
Status before declaration: undefined
Status after declaration: PASSED
*/

// Replace var with let

/*
console.log("Status before declaration: " + testStatus);
let testStatus = "PASSED";
console.log("Status after declaration: " + testStatus);
*/


/*
Result:
Throws Error:
ReferenceError: Cannot access 'testStatus' before initialization
*/
/*----------------------------------------------------------------------------------------------*/

// Step 2 - `var` leaks out of if-blocks**

/*
if (true) {
    var tempUser = "admin@test.com";
    console.log("Inside block: " + tempUser);
}
console.log("Outside block: " + tempUser);  // Does this crash or print?
*/

/*
Output: It Prints
Inside block: admin@test.com
Outside block: admin@test.com
*/

// replace var with let

/*
if (true) {
    let tempUser = "admin@test.com";
    console.log("Inside block: " + tempUser);
}
console.log("Outside block: " + tempUser);  // Does this crash or print?
*/
// Error message: ReferenceError: tempUser is not defined

/*----------------------------------------------------------------------------------------------*/

// **Step 3 — `var` in a for-loop leaks the counter**
/*
for (var i = 0; i < 3; i++) {
    console.log("Running test step " + i);
}
console.log("After loop, i = " + i);   // What is i here?

*/

/*
Output:
Running test step 0
Running test step 1
Running test step 2
After loop, i = 3
*/

// replace var with let
/*
for (let i = 0; i < 3; i++) {
    console.log("Running test step " + i);
}
console.log("After loop, i = " + i);   // What is i here?
*/
// Output: ReferenceError: i is not defined


/*----------------------------------------------------------------------------------------------*/
// *** Step 4: Rewrite all using 'const'

/*
console.log("Status before declaration: " + testStatus);
const testStatus = "PASSED";
console.log("Status after declaration: " + testStatus);
*/

// Error: ReferenceError: Cannot access 'testStatus' before initialization

/*

if (true) {
    const tempUser = "admin@test.com";
    console.log("Inside block: " + tempUser);
}
console.log("Outside block: " + tempUser);  // Does this crash or print?
*/

//Error: ReferenceError: tempUser is not defined

for (const i = 0; i < 3; i++) {
    console.log("Running test step " + i);
}
console.log("After loop, i = " + i);   // What is i here?

// Output: Error - TypeError: Assignment to constant variable.