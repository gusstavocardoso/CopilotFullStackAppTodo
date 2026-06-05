const express = require('express');
const Todo = require('../models/Todo');
const router = express.Router();

router.post('/reset', async (req, res) => {
  await Todo.deleteMany({});
  res.json({ ok: true });
});

module.exports = router;
