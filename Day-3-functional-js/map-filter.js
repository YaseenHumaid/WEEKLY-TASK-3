const numbers = [1, 2, 3, 4, 5, 6];

const doubled = numbers.map(num => num * 2);

const evens = numbers.filter(num => num % 2 === 0);

console.log("Original:", numbers);
console.log("Doubled:", doubled);
console.log("Even Numbers:", evens);
