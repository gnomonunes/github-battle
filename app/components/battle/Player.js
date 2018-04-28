import React from "react";
import PropTypes from "prop-types";

class Player extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      label: props.label
    }
  }

  render() {
    return (
      <div className="column">
        <label htmlFor="username" className="header">
          {this.state.label}
        </label>
        <input
          type="text"
          id="username"
          placeholder="github username"
          autoComplete="off" />
        <button className="button" type="submit">submit</button>
      </div>
    )
  }
}

Player.propTypes = {
  label: PropTypes.string
}

export default Player;
