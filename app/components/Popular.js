import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import GithubConnector from "../utils/github-connector";

const LANGUAGES = ["All", "JavaScript", "Java", "Ruby", "Python", "PHP"];

const SelectLanguage = (props) => (
  <ul className="languages">
    {LANGUAGES.map(language => (
      <li key={language}>
        <NavLink activeClassName="active" to={"/popular/"+  language}>{language}</NavLink>
      </li>
    ))}
  </ul>
);

// const RepoGrid = (props) => (
//   <div>
//     {props.language}
//   </div>
// );

class RepoGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: props.language,
      repos: []
    }

    // console.log(props);

    // this.updateLanguage = this.updateLanguage.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      selectedLanguage: nextProps.language
    }
  }

  // shouldComponentUpdate(nextProps, prevState) {
  //   // console.log(nextProps.language);
  //   // console.log(prevState.selectedLanguage);
  //   // console.log(nextProps.language !== prevState.selectedLanguage);
  //   return(nextProps.language !== prevState.selectedLanguage);
  // }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
    console.log(this.state);
    // this.setState({selectedLanguage: prevProps.language, repos: [1,2]});

    if (this.state.selectedLanguage !== prevState.selectedLanguage) {
      this.setState({repos: []});
      GithubConnector.fetchPopularRepos(this.state.selectedLanguage)
        .then((repos) => {
          this.setState({repos: repos});
        });
    }
  }

  // updateRepos

  render() {
    if (this.state.repos.length === 0) return (<p>Loading</p>);
    return (
      <ul className="popular-list">
        {this.state.repos.map((repo, index) => (
          <li key={repo.name} className="popular-item">
            <div className="popular-rank">#{index + 1}</div>
            <ul className="space-list-items">
              <li>
                <img
                  className="avatar"
                  src={repo.owner.avatar_url}
                  alt={"Avatar for " + repo.owner.login}
                />
              </li>
              <li><a href={repo.html_url}>{repo.name}</a></li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count} stars</li>
            </ul>
          </li>
        ))}
      </ul>
    )
  }
}

const Popular = ({match}) => (
  <div>
    <h2>{match.params.language}</h2>
    <SelectLanguage />
    <RepoGrid language={match.params.language} />
  </div>
)

export default Popular;
