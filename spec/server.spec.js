import { expect, assert } from 'chai';
import axios from 'axios';
import {} from 'dotenv/config';
import 'babel-polyfill'; // for async/await compiling

describe('Express Server', () => {
  let response;
  const query = { params: { msg: 'this is a test' } };
  before((done) => {
    axios.get(`http://127.0.0.1:${process.env.PORT}`, query)
      .then(res => { response = res; })
      .then(() => done())
      .catch(err => done(err));
  });

  it('should respond to GET with 200 status', () => {
    expect(response.status).to.equal(200);
  });
  it('response data should be a string', () => {
    expect(response.data).to.be.a('string');
  });
  it('response data should be a react tag', () => {
    const isReact = response.data.includes('reactroot')
    expect(isReact).to.be.true;
  });
  it('response data should contain message', () => {
    expect(response.data.includes(query.params.msg)).to.be.true;
  });
});
