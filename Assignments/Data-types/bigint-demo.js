
// Store and print MAX_SAFE_INTEGER
let max = Number.MAX_SAFE_INTEGER;
console.log("MAX_SAFE_INTEGER: " + max);
console.log("------------------------------------------");

// Check precision breaks)
console.log("Results using Number type:");
console.log(max + 1); // 9007199254740992
console.log(max + 2); // 9007199254740992 (Wait, it didn't change!)
console.log(max + 3); // 9007199254740994 (Now it jumps!)
console.log("");

// We use the 'n' suffix for BigInt literals
let bigMax = 9007199254740991n;
console.log("Results using BigInt type:");
console.log(bigMax + 1n); // 9007199254740992n
console.log(bigMax + 2n); // 9007199254740993n
console.log(bigMax + 3n); // 9007199254740994n
console.log("");

// Print typeof BigInt
console.log("The type of bigMax is: " + typeof bigMax);
console.log("");
