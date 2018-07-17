import axios from "axios";

const GithubConnector = {
  fetchPopularRepos: (language) => {
    const uri = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);

    return axios.get(uri)
      .then((response) => response.data.items);
  },
  fetchUser: (username) => {
    const uri = window.encodeURI(`https://api.github.com/search/users?q=${username}`);

    return axios.get(uri)
      .then((response) => response.data.items[0]);
  }
}

export default GithubConnector;
