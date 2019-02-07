import axios from "axios";

const apiUrl = 'https://api.github.com';

const userData = (username) => {
  return axios.all([
    profile(username),
    repos(username)
  ]).then(data => {
    const profile = data[0];
    const repos = data[1];

    return {
      profile: profile,
      score: score(profile, repos)
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

const score = (profile, repos) => {
  const followers = profile.followers;
  const totalStars = starCount(repos);

  return (followers * 3) + totalStars;
}

const starCount = (repos) => {
  return repos.reduce((count, repo) => {
    return count + repo['stargazers_count'];
  }, 0);
}

const sortPlayers = (players) => {
  return players.sort((playerA, playerB) => (playerB.score - playerA.score))
}

const get = (uri) => {
  const encodedUri = window.encodeURI(uri);

  return axios.get(uri);
}

const handleError = (error) => {
  console.warn(error);
  return null;
}

const GithubConnector = {
  battle: (usernames) => {
    return axios.all(usernames.map(userData))
      .then(sortPlayers)
      .catch(handleError);
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
