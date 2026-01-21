const calculate = (a, b, operation) => {
  return operation(a, b);
};

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(calculate(5, 3, add));       
console.log(calculate(5, 3, multiply)); 
