import React from "react";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/battle" component={Battle} />
            <Route exact path="/popular" component={Popular} />
            <Route exact path="/popular/:language" component={Popular} />
            <Route render={() => (<p>Not Found</p>)} />
          </Switch>
        </div>
      </Router>
    )
  }
}

App.propTypes = {
  name: PropTypes.string.isRequired
}

export default App;
