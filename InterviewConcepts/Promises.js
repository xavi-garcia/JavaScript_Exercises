const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation
    setTimeout(() => {
      // Successful resolution
      resolve("Success!");

      // Failed resolution
      // reject("Error!");
    }, 1000);
  });
  
myPromise.then((result) => {
    console.log(result); // "Success!"
  }).catch((error) => {
    console.log(error); // "Error!"
  });
  