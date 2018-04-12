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
    <ul className='popular-list'>
      {props.repos.map((repo, index) => {
        return (
          <li key={repo.name} className='popular-item'>
            <div className='popular-rank'>#{index + 1}</div>
            <ul className='space-list-items'>
              <li>
                <img
                  className='avatar'
                  src={repo.owner.avatar_url}
                  alt={'Avatar for ' + repo.owner.login}
                />
              </li>
              <li><a href={repo.html_url}>{repo.name}</a></li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count} stars</li>
            </ul>
          </li>
        )
      })}
    </ul>
  );
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired
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
            <p className='loading'>Loading...</p>}
      </div>
    )
  }
}

export default Popular;
