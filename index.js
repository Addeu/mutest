//Here the app begins
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const fs = require('file-system');
const text = fs.readFileSync(`test.txt`, `utf8`);
const app = express();
const port = 3000;


app.get('/', (request, response) => {
  response.render('t-upload', {
    here: text
  })
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something wrong', err)
  }

  console.log(`server is listening on port ${port}`);
});

app.engine('.hbs', exphbs ({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}))

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));
