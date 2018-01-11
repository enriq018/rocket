import React from 'react';
import PropTypes from 'prop-types';

const test = props => <div>Hello this is SSR: {props.msg}</div>;

test.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default test;
