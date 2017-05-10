import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

// Call an instance of express and store it in the app variable
const app = express();

dotenv.config({ path: '.env' });

// (TODO): Change port to avoid blinding the env variable on heroku
const port = process.env.PORT_DEV;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(`${__dirname}/src`));
app.use(require('./routes/inverted-index-route.js'));

app.listen(port, () => {
  console.log(`Magic happens on port http://localhost:${port}`);
});

module.exports = app;
