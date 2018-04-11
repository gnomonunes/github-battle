import React from "react";
import PropTypes from "prop-types";
import GithubConnector from "../utils/github-connector";

const LANGUAGES = ["All", "JavaScript", "Java", "Ruby", "Python", "PHP"];

const SelectLanguage = (props) => {
  return (
    <ul className="languages">
      {LANGUAGES.map(language => {
        return (
          <li
            key={language}
            onClick={props.onSelect.bind(null, language)}
            style={props.selectedLanguage == language ? {color: '#d0021b'} : null}>
            {language}
          </li>
        );
      })}
    </ul>
  );
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

const RepoGrid = (props) => {
  return (
    <ul>
      {props.repos.map(repo => (<li key={repo.name}>{repo.name}</li>))}
    </ul>
  );
}

class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: 'All'
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(language) {
    this.setState(() => ({ selectedLanguage: language, repos: null }));

    GithubConnector.fetchPopularRepos(language)
      .then((repos) => {
        this.setState(() => ({repos}))
      });
  }

  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage} />
        {this.state.repos
          ? <RepoGrid
              repos={this.state.repos} />
          :
            <p>Loading</p>}
      </div>
    )
  }
}

export default Popular;
