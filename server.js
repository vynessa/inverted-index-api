const express = require('express'),
  app = express(),
  dotenv = require('dotenv');

// make express look in the public directory
dotenv.config();

const port = process.env.PORT_TEST;

app.use(express.static(__dirname + '/src'));
app.get('/', (res, req) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Magic happens on port http://localhost:' + ${port}`);
});
