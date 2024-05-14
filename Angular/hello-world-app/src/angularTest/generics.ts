function checkEvenOrOdd<T>(numbers: T[]): { evens: T[], odds: T[] } {
    const evens: T[] = [];
    const odds: T[] = [];

    numbers.forEach(num => {
        if (typeof num === 'number' && num % 2 === 0) {
            evens.push(num);
        } else {
            odds.push(num);
        }
    });

    return { evens, odds };
}

const numbers = [1, 2, 3, 4, 5, 6];
const result = checkEvenOrOdd(numbers);
console.log("Even Numbers:", result.evens); 
console.log("Odd Numbers:", result.odds); 
