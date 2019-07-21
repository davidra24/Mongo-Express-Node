const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  const indexPath = path.join(__dirname, '../views/index.html');
  return res.sendFile(indexPath);
});

router.get('/pug', (req, res) => {
  const name = req.query.name || 'Descoconocido';
  return res.render('pug', { name });
});

module.exports = router;
