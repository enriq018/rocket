import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {} from 'dotenv/config';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Test from '../client/TestView';

const app = express();
const port = process.env.PORT;

app.listen(port, () => console.log(`express is listening on ${port}`)); // eslint-disable-line

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  const message = req.query.msg || 'hello world';
  res.send(ReactDOMServer.renderToString(<Test msg={message} />));
});
