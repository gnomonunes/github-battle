import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Navigation from "./Navigation";
import Popular from "./Popular";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navigation />
          <Route exact path="/" render={(props) => <h1>Home</h1>} />
          <Route path="/popular" component={Popular} />
        </div>
      </Router>
    )
  }
}

App.propTypes = {
  name: PropTypes.string.isRequired
}

export default App;
