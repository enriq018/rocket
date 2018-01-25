import {} from 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import mockGameData from '../mockGameData'

const app = express();
const port = process.env.PORT || 1337;
const assets = path.join(__dirname, '../client');

const igdb = require('igdb-api-node').default;
const client = igdb('API KEY HERE');


app.listen(port, () => console.log(`express is listening on ${port}`)); // eslint-disable-line
// disable for global requires since airbnb doesn't like them being in a block
if (process.env.NODE_ENV === 'development') {
  /* eslint-disable */
  const config = require('../webpack.dev.js');
  const compiler = require('webpack')(config);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  }));
  app.use(require('webpack-hot-middleware')(compiler));
  /* eslint-enable */
}

app.use(express.static(assets))
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {

});

app.get('/games', (req, res) => {
	res.status(200);
	res.send(mockGameData)
});

/*
How to use API with wrapper
app.get('/games', (req, res) => {
  //node js wrapper used to access api
  // * means select all fields
  // & order = filter:value 
  client.games({
    fields: '*&order=popularity:desc',
    limit: 30
  }).then(response => {
    // response.body contains the parsed JSON response to this query
    res.status(200);
    res.send(response);
  }).catch(error => {
    res.status(400);
    res.send('error');
  });
});
*/
