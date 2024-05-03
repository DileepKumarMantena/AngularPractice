enum Even {
    One = 1,
    Two = 2,
    Three = 3,
    Four = 4,
}

function checkEvenOrOdd(num: Even): string {
    if (num % 2 === 0) {
        return `${num} is even.`;
    } else {
        return `${num} is odd.`;
    }
}

console.log(checkEvenOrOdd(Even.One)); 