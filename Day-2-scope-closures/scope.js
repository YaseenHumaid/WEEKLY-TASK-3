let x = 10;

if (true) {

  let y = 20;
  var z = 30;
  console.log("Inside block:", x, y, z);
}

console.log("Outside block:", x, z);