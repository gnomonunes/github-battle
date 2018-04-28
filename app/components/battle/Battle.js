import React from "react";
import Player from "./Player";
import PlayerForm from "./PlayerForm";

class Battle extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      playersOne: {
        username: null,
        image: null
      },
      playerTwo: {
        username: null,
        image: null
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(id, username) {
    const newState = {}
    newState[id] = {
      username: username,
    }

    this.setState(newState);
  }

  render() {
    return (
      <div className="row">
        <PlayerForm
            id="playersOne" label="Player One"
            onSubmit={this.handleSubmit} />
        <PlayerForm
            id="playersTwo" label="Player Two"
            onSubmit={this.handleSubmit} />
      </div>
    );
  }
}


export default Battle;
