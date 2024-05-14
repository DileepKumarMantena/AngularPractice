export function findMax(numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error("Array is empty");
    }
    return Math.max(...numbers);
}

export function findMin(numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error("Array is empty");
    }
    return Math.min(...numbers);
}
