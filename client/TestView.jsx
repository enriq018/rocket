import 'babel-polyfill';
import React from 'react';
// import PropTypes from 'prop-types';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = props || { msg: 'no message' };
  }
  click() {
    console.log(this);
    console.log('hello click');
  }
  render() {
    return (
      <div // eslint-disable-line
        onClick={this.click}
        onKeyUp={this.click}
      >
          Hello, {this.state.msg}
      </div>
    );
  }
}

// const test = props => <div>Hello, {props.msg}</div>;

// Test.propTypes = {
//   msg: PropTypes.string.isRequired,
// };

export default Test;
