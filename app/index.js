const React = require('react');
const ReactDOM = require('react-dom');
const PropTypes = require('prop-types');
const App = require('./components/App');
require('./index.css');

ReactDOM.render(
  <App name="Fernando"/>,
  document.getElementById('app')
)
