function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received using Promise ");
    }, 1000);
  });
}

fetchDataPromise()
  .then(data => console.log(data))
  .catch(error => console.log(error));
