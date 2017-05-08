const express = require('express');
const dotenv = require('dotenv');

const app = new express();


// make express look in the public directory
dotenv.config();

const port = process.env.PORT_TEST;

app.use(express.static(`${__dirname} + /src`));
app.get('/', (res, req) => {
  res.render('index');
});

app.listen(port, () => {
  return (`Magic happens on port http://localhost:' + ${port}`);
});
