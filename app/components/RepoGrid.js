import React from "react";
import PropTypes from "prop-types";
import GithubConnector from "../utils/github-connector";
import Repo from "./Repo";

class RepoGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: props.language,
      repos: []
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      selectedLanguage: nextProps.language
    }
  }

  componentDidMount() {
    this.updateRepos();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.selectedLanguage !== prevState.selectedLanguage) {
      this.updateRepos()
    }
  }

  updateRepos() {
    this.setState({repos: []});

    const language = this.state.selectedLanguage || 'All';

    GithubConnector.fetchPopularRepos(language)
      .then((repos) => {
        this.setState({repos: repos});
      });
  }

  render() {
    if (this.state.repos.length === 0) {
      return (<p className="loading">Loading...</p>);
    }

    return (
      <ul className="popular-list">
        {
          this.state.repos.map((repo, index) => (
            <Repo repo={repo} rank={index} key={index + 1} />
          ))
        }
      </ul>
    )
  }
}

RepoGrid.propTypes = {
  language: PropTypes.string
}

export default RepoGrid;
