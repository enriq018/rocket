import React from 'react';
import { hydrate } from 'react-dom';
import Test from './TestView';

hydrate(<Test />, document.getElementById('root'));
