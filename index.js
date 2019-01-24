//Importing modules & variables
const express = require('express');
const path = require('path');
const appRouter = require('./routes/routes');
const app = express();
const port = process.env.PORT || 3000;
const usrPath = path.join(__dirname, 'public');

//Storage settings


//Server

app.use(express.static(usrPath));
app.use(appRouter);



app.listen(port, (err) => {
  if (err) {
    return console.log('something wrong', err);
  }

  console.log(`server is listening on port ${port}`);
});
