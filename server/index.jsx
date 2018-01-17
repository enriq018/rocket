import {} from 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Test from '../client/TestView';
// import App from '../client/App';

const app = express();
const port = process.env.PORT || 1337;
const assets = express.static(path.join(__dirname, '../client/compiled'));

app.listen(port, () => console.log(`express is listening on ${port}`)); // eslint-disable-line

app.use(assets);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/test?:msg', (req, res) => {
  const message = req.query.msg || 'hello world';
  res.send(renderToString(<Test msg={message} />));
});
