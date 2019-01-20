//Importing modules & variables
const express = require('express');
const path = require('path');
const multer = require('multer');
const appRouter = require('./routes/routes');
const app = express();
const port = process.env.PORT || 3000;
const usrPath = path.join(__dirname, 'public');

//Storage settings
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads');
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '.txt');
  }
});
const upload = multer({storage: storage});

//Server
app.use('/upload', appRouter);
app.use(express.static(usrPath));


app.listen(port, (err) => {
  if (err) {
    return console.log('something wrong', err);
  }

  console.log(`server is listening on port ${port}`);
});
