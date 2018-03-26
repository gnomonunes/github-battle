var React = require('react');
var ReactDOM = require('react-dom');
require('../css/index.css');

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello Fernando!</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
