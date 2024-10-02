const runTest = require('./test');
function runTest() {
    console.log("Running test...");
    const sum = (a, b) => a + b;
    console.log("Sum of 2 and 3 is:", sum(2, 3));
}

runTest(); 