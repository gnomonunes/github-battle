var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
require('../css/index.css');

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

ReactDOM.render(
  <App name="Fernando"/>,
  document.getElementById('app')
)
