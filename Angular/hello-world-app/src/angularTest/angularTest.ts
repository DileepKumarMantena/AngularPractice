const myArray: number[] = [1, 2, 3, 4, 5];

myArray.push(6, 7);
console.log("Array after push:", myArray);

myArray.unshift(0);
console.log("Array after unshift:", myArray);

const poppedElement = myArray.pop();
console.log("Array after pop:", myArray);

const shiftedElement = myArray.shift();
console.log("Array after shift:", myArray);




var arr: number[] = [4, 8, 12];

var sum = arr.reduce(function (acc, curr) {return acc + curr}, 0);

console.log("Sum is " + sum);

const max = Math.max(...arr);
const min = Math.min(...arr);
console.log("Max is " + max);
console.log("Min is " + min);

