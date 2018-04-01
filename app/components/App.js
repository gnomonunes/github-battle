var React = require('react');
var PropTypes = require('prop-types');
var Popular = require('./Popular');

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Popular />
      </div>
    )
  }
}

App.propTypes = {
  name: PropTypes.string.isRequired
}

module.exports = App;
