function fetchData(callback) {
  console.log("Fetching data...");

  setTimeout(() => {
    callback("Data received successfully");
  }, 1500);
}

function displayData(message) {
  console.log(message);
}

fetchData(displayData);
