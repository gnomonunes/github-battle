import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Navigation from "./Navigation";
import Home from "./Home";
import Battle from "./Battle";
import Popular from "./Popular";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route path="/battle" component={Battle} />
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
