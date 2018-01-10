import { expect, assert } from 'chai';
import axios from 'axios';
import {} from 'dotenv/config';
import 'babel-polyfill'; // for async/await compiling
import '../server'

describe('Express Server', () => {
  after(() => {
    process.exit(2)
  });
  
  it('should respond to GET with 200 status', async () => {
    const response = await axios.get(`http://127.0.0.1:${process.env.PORT}`);
    expect(response.status).to.equal(200);
  });
});
