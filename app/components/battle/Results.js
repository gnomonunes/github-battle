import React from "react";
import GithubConnector from "../../utils/github-connector";
import PropTypes from "prop-types";
import PlayerPreview from "./PlayerPreview";
import Loading from "../layout/Loading";

const parseUsernames = (searchString) => {
  const playersRegex = /\?playerOneUsername=(?<playerOne>\w+)&playerTwoUsername=(?<playerTwo>\w+)/;

  return searchString.match(playersRegex).groups;
}

const Profile = (props) => {
  var info = props.info;

  return (
    <PlayerPreview username={info.login} avatar={info.avatar_url}>
      <ul className='space-list-items'>
        {info.name && <li>{info.name}</li>}
        {info.location && <li>{info.location}</li>}
        {info.company && <li>{info.company}</li>}
        <li>Followers: {info.followers}</li>
        <li>Following: {info.following}</li>
        <li>Public Repos: {info.public_repos}</li>
        {info.blog && <li><a href={info.blog}>{info.blog}</a></li>}
      </ul>
    </PlayerPreview>
  )
}

Profile.propTypes = {
  info: PropTypes.object.isRequired,
}

const Player = (props) => (
  <div>
    <h1 className='header'>{props.label}</h1>
    <h3 style={{textAlign: 'center'}}>Score: {props.score}</h3>
    <Profile info={props.profile} />
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
        return <Loading />
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
