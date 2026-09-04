const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/signin', (req, res) => {
  res.json({
    success: true,
    user: { id: 1, username: 'testuser', email: req.body.email },
  });
});

app.post('/signup', (req, res) => {
  res.json({
    success: true,
    user: { id: 2, username: req.body.username, email: req.body.email },
  });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});