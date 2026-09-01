const fs = require('fs');
fs.writeFileSync("notes.txt", "Hello Node.js.");

const data = fs.readFileSync("notes.txt", "utf-8");
console.log(`read data: ${data}`);

fs.appendFileSync("notes.txt", "ECE-A");

fs.rmSync("notes.txt");