function findLargest(a, b, c) {
  if (a >= b && a >= c) return a;
  if (b >= a && b >= c) return b;
  return c;
}

console.log("Largest:", findLargest(10, 25, 15));
