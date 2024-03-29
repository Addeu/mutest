//Importing modules & variables
const express = require('express');
const path = require('path');
const appRouter = require('./routes/routes.js');
const app = express();
const port = 3000;
const usrPath = path.join(__dirname, 'public');
const favicon = require('serve-favicon');

//Server
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(usrPath));
app.use('/api', appRouter);


app.listen(port, (err) => {
  if (err) {
    return console.log('something wrong', err);
  }

  console.log(`server is listening on port ${port}`);
});

module.exports = usrPath;
