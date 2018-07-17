import React from "react";
import { Link } from "react-router-dom";
import PlayerForm from "./PlayerForm";
import PlayerPreview from "./PlayerPreview";
import GithubConnector from "../../utils/github-connector";

class Battle extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      playerOne: {
        username: null,
        avatar: null
      },
      playerTwo: {
        username: null,
        avatar: null
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleSubmit(id, username) {

    GithubConnector.fetchUser(username)
      .then((user) => {
        const newState = {}

        newState[id] = {
          username: user.login,
          avatar: user.avatar_url
        }

        this.setState(newState);
      });
  }

  handleReset(id) {
    const newState = {}

    newState[id] = {
      username: null,
      avatar: null
    }

    this.setState(newState);
  }

  render() {
    return (
      <div>
        <div className="row">
          {!this.state.playerOne.username ?
            <PlayerForm
                id="playerOne" label="Player One"
                onSubmit={this.handleSubmit} />
            :
            <PlayerPreview
              avatar={this.state.playerOne.avatar}
              username={this.state.playerOne.username}
              onReset={this.handleReset}
              id="playerOne" />
          }
          {!this.state.playerTwo.username ?
            <PlayerForm
                id="playerTwo" label="Player Two"
                onSubmit={this.handleSubmit} />
            :
            <PlayerPreview
              avatar={this.state.playerTwo.avatar}
              username={this.state.playerTwo.username}
              onReset={this.handleReset}
              id="playerTwo" />
          }
        </div>

        {this.state.playerOne.username && this.state.playerTwo.username &&
          <Link
            className='button'
            to={{
              pathname: `${this.props.match.url}/results`,
              search: `?playerOneUsername=${this.state.playerOne.username}&playerTwoUsername=${this.state.playerTwo.username}`
            }}>
            Battle
          </Link>}
        </div>
    );
  }
}

export default Battle;
