const express = require('express');
const cors = require('cors');
const categories = require('./routes/categories');
const users = require('./routes/users');
const auth = require('./routes/auth');
const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/categories', categories);
app.use('/api/users', users);
app.use('/api/auth', auth);

const port = process.env.PORT || 7000;
app.listen(port, function () {
  console.log(`Policeno Simple API started on port ${port}...`);
});
