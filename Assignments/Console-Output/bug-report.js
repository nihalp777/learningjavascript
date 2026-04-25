

console.log("=============================================================");
console.log("                          Bug Report                         ");
console.log("=============================================================");
console.log("");

console.log("Bug ID: 54549");
console.log("Bug Title: Error Message on clicking Submit button for uploading file");
console.log(`Steps to reproduce:
1. Open the "User Profile" menu.
2. Click the "Edit Avatar" button.
3. Upload a file larger than 5MB.
4. Click submit button.
5. Check the error log for a 500 status code 💥.`);
console.log("Actual Result: Error Message with 500 status code 💥");
console.log("Expected Result: Success Message to be displayed on submitting the file");
