const mypromise = new Promise((resolve, reject) => {
  const password = "aayush@0408";
  if (password > 8) {
    resolve("Password length is okk ");
  } else {
    reject("Password is short length");
  }
});
console.log(mypromise);
mypromise
  .then((success) => {
    console.log(success);
  })
  .catch((error) => {
    console.log(error);
  });

mypromise.catch(
    
)
