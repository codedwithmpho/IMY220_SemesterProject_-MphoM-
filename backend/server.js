//our backend tools
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); //lets frontend (different port) talk to this server
app.use(express.json()); //lets us read JSON data sent in requests

//fake "sign in" endpoint - no real database check yet, just returns dummy data
app.post('/signin', (req, res) => {
  res.json({
    success: true,
    user: { id: 1, username: 'testuser', email: req.body.email },
  });
});

//fake "sign up" endpoint - same idea, just echoes back what was sent
app.post('/signup', (req, res) => {
  res.json({
    success: true,
    user: { id: 2, username: req.body.username, email: req.body.email },
  });
});

//start the server on port 3000
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});