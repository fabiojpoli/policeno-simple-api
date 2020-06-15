const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const categoriesStore = require('../store/categories');

router.get('/', auth, (req, res) => {
  const categories = categoriesStore.getCategories();
  res.send(categories);
});

module.exports = router;
