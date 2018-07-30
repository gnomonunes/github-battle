import axios from "axios";

const apiUrl = 'https://api.github.com';

const userData = (username) => {
  return axios.all([
    profile(username),
    repos(username)
  ]).then(data => {
    return {
      profile: data[0],
      repos: data[1]
    }
  })
}

const profile = (username) => {
  return get(`${apiUrl}/users/${username}`)
    .then(response => response.data);
}

const repos = (username) => {
  return get(`${apiUrl}/users/${username}/repos`)
    .then(response => response.data);
}

const starCount = (repos) => {
  return repos.reduce((count, repo) => {
    return count + repo['stargazers_count']
  }, 0);
}

const get = (uri) => {
  const encodedUri = window.encodeURI(uri);

  return axios.get(uri);
}

const GithubConnector = {
  battle: (usernames) => {
    usernames.map(username => {
      userData(username)
        .then((user) => {
          console.log(starCount(user['repos']));
        })
    })
  },
  fetchPopularRepos: (language) => {
    return get(`${apiUrl}/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)
      .then(response => response.data.items);
  },
  fetchUser: (username) => {
    return get(`${apiUrl}/search/users?q=${username}`)
      .then(response => response.data.items[0]);
  }
}

export default GithubConnector;
