import express from 'express';
import dotenv from 'dotenv';

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
