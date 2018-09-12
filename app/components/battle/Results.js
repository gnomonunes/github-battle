import React from "react";
import GithubConnector from "../../utils/github-connector";

const parseUsernames = (searchString) => {
  const playersRegex = /\?playerOneUsername=(?<playerOne>\w+)&playerTwoUsername=(?<playerTwo>\w+)/;

  return searchString.match(playersRegex).groups;
}

const Player = (props) => (
  <div>
    <h1 className='header'>{props.label}</h1>
    <h3 style={{textAlign: 'center'}}>Score: {props.score}</h3>
  </div>
)

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true,
    }
  }


  componentDidMount() {
    const usernames = Object.values(parseUsernames(this.props.location.search));

    GithubConnector.battle(usernames)
      .then((players) => {
        this.setState({
          error: null,
          winner: players[0],
          loser: players[1],
          loading: false
        });
      });
  }

  render() {
    if (this.state.loading === true) {
      return <div>Loading...</div>
    }

    return (
      <div className='row'>
        <Player
          label='Winner'
          score={this.state.winner.score}
          profile={this.state.winner.profile}
        />
        <Player
          label='Loser'
          score={this.state.loser.score}
          profile={this.state.loser.profile}
        />
      </div>
    )
  }
}

export default Results;
