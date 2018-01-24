import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {} from 'dotenv/config';

const app = express();
const port = process.env.PORT || 1337;

app.listen(port, () => console.log(`express is listening on ${port}`)); // eslint-disable-line

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {

});
