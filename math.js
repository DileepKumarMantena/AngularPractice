// Math Module
console.log(Math.sqrt(4))
console.log(Math.pow(2,3))
console.log(Math.random(0,1))
console.log(Math.round(10.2333333))
value=Math.sin(90)
console.log(Math.round(value))

//os Module 

const os = require('os');
console.log(os.platform());

const os1 = require('os');
console.log(os1.release());

const os2 = require('os');
console.log(`Total Memory: ${os2.totalmem()} bytes`);
console.log(`Free Memory: ${os2.freemem()} bytes`);

const os3 = require('os');
console.log(os3.homedir()); 

