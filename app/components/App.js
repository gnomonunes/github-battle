var React = require('react');
var PropTypes = require('prop-types');

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}!</h1>
      </div>
    )
  }
}

App.propTypes = {
  name: PropTypes.string.isRequired
}

module.exports = App;
