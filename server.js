import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

const app = express();

// Import InvertedIndex class
// const 


// make express look in the public directory
dotenv.config({ path: '.env' });

const port = process.env.PORT_DEV;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(`${__dirname}/src`));
app.use(require('./routes/inverted-index-route.js'));

// app.get('/', (res, req) => {
//   res.render('index');
// });

// http.createServer();

app.listen(port, () => {
  console.log(`Magic happens on port http://localhost:${port}`);
});

module.exports = app;
