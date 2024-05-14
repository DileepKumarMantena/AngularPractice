import { findMax, findMin } from "./mathFunctions";

const numbers: number[] = [1, 5, 3, 9, 2];

const maxNumber = findMax(numbers);
const minNumber = findMin(numbers);

console.log("Maximum Number:", maxNumber); 
console.log("Minimum Number:", minNumber);
