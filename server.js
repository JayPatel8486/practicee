const express = require('express');
const app = express();
const port = 4000;

const cors = require('cors');
app.use(cors());  

app.use(express.static('public'));

app.get('/api/data', (req, res) => {
  // Simulate a delay before sending the response
  res.send('data found')
});

app.use(express.static(__dirname+'/public'));

app.get('/api/images', function (req, res) {
  res.sendFile(__dirname + '/public/spiceitup.jpg');
  console.log(__dirname + '/public/spiceitup.jpg'); 
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});