import {} from 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 1337;

app.listen(port, () => console.log(`express is listening on ${port}`)); // eslint-disable-line

// disable for global requires since airbnb doesn't like them being in a block
if (process.env.NODE === 'development') {
  /* eslint-disable */
  const config = require('../webpack.dev.js');
  const compiler = require('webpack')(config);
  app.use(require('webpackDevMiddleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  }));
  app.use(require('webpackHotMiddleware')(compiler));
  /* eslint-enable */
}

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {

});
