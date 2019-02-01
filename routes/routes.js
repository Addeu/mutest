const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const root = path.resolve(__dirname, "../public");
const quizrender = require('../quizzzler.js');

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
router.post('/quizes', upload.single('quiz'), (req, res) => {
  res.sendFile('question.html', {root: root});
});
router.get('/student', (req, res) => {
    res.sendFile('question.html', {root: root});
});
router.get('/quizes', (req, res) => {
  res.json(quizrender());
});

module.exports = router;
