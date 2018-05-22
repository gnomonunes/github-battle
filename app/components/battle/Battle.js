import React from "react";
import PlayerForm from "./PlayerForm";
import PlayerPreview from "./PlayerPreview";

class Battle extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      playerOne: {
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
        {!this.state.playerOne.username ?
          <PlayerForm
              id="playerOne" label="Player One"
              onSubmit={this.handleSubmit} />
          :
          <PlayerPreview username={this.state.playerOne.username} />
        }
        {!this.state.playerTwo.username ?
          <PlayerForm
              id="playerTwo" label="Player Two"
              onSubmit={this.handleSubmit} />
          :
          <PlayerPreview username={this.state.playerTwo.username} />
        }
      </div>
    );
  }
}

export default Battle;
