export function addTwo(x: number, y: number): number {
    return x + y;
}

export function sumNumbers(numbers: number[]): number {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}