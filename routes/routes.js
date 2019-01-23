const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads');
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '.txt');
  }
});
const upload = multer({storage: storage});


router.get('/', (req, res) => {
  res.status(200);
});
router.post('/upload', upload.single('quiz'), (req, res) => {
  const quiz = req.file;
  res.sendStatus(200);
});

module.exports = router;
