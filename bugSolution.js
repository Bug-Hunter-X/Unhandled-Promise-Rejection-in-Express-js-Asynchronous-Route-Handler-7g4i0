const express = require('express');
const app = express();
app.get('/', (req, res) => {
  doSomethingAsync().then(() => {
    res.send('OK');
  }).catch(error => {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error'); // Send a proper error response
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

async function doSomethingAsync() {
  await new Promise((resolve, reject) => {
    const success = Math.random() < 0.5;
    setTimeout(() => {
      if (success) {
        resolve();
      } else {
        reject(new Error('Something went wrong'));
      }
    }, 1000);
  });
}