import React from "react";
import GithubConnector from "../../utils/github-connector";

// searchString.match(/\?playerOneUsername=(?<playerOneUsername>\w+)&playerTwoUsername=(?<playerTwoUsername>\w+)/).groups['playerOneUsername']

const parseUsernames = (searchString) => {
  const playersRegex = /\?playerOneUsername=(?<playerOne>\w+)&playerTwoUsername=(?<playerTwo>\w+)/;

  return searchString.match(playersRegex).groups;
}

class Results extends React.Component {
  constructor(props) {
    super(props);

    const usernames = Object.values(parseUsernames(props.location.search));

    console.log(GithubConnector.battle(usernames));
  }

  render() {
    return (
      <div>Results</div>
    )
  }
}

export default Results;
