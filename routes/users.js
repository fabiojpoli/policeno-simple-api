const express = require('express');
const router = express.Router();
const usersStore = require('../store/users');
const auth = require('../middleware/auth');

router.post('/', auth, (req, res) => {
  const { name, email, password } = req.body;
  if (usersStore.getUserByEmail(email))
    return res
      .status(400)
      .send({ error: 'A user with the given email already exists.' });

  const user = { name, email, password };
  usersStore.addUser(user);

  res.status(201).send(user);
});

router.get('/', auth, (req, res) => {
  res.send(usersStore.getUsers());
});

module.exports = router;
