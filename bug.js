const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  doSomethingAsync().then(() => {
    res.send('OK');
  }).catch(error => {
    // Error handling is missing here! 
    console.error('Error:', error);
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

async function doSomethingAsync() {
  // Simulate an asynchronous operation that might fail
  await new Promise((resolve, reject) => {
    const success = Math.random() < 0.5; // 50% chance of success
    setTimeout(() => {
      if (success) {
        resolve();
      } else {
        reject(new Error('Something went wrong'));
      }
    }, 1000);
  });
}