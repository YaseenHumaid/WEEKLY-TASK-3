function getData() {
  return new Promise((resolve, reject) => {
    const success = true;

    setTimeout(() => {
      if (success) {
        resolve("Data fetched successfully ");
      } else {
        reject("Error while fetching data ");
      }
    }, 1000);
  });
}

async function fetchResult() {
  try {
    const result = await getData();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

fetchResult();
