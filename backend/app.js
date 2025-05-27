const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');

app.use(cors());
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Node.js backend!' });
});

// TODO: Add routes from routes/index.js
app.use('/api', routes);

module.exports = app; 