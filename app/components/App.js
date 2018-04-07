import React from "react";
import PropTypes from "prop-types";
import Popular from "./Popular";

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

export default App;
