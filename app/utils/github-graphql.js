import ApolloClient from "apollo-boost"
import gql from "graphql-tag"

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: "bearer {auth}"
  }
})

const GithubGraphQL = {
  fetchPopularRepos: (language) => {
    return client.query({
      query: gql`{
        search(query: "language:${language} stars:>1 sort:stars-desc", type: REPOSITORY, first: 20) {
          edges {
            node {
              ... on Repository {
                name
                url
                stargazers {
                  totalCount
                }
                owner {
                  login
                  avatarUrl
                }
              }
            }
          }
        }
      }`
    })
    .then(result => (
      result.data.search.edges.map(edge => edge.node)
    ))
  },

  test: () => {

    client
      .query({
        query: gql`
          {
            user(login: "gnomonunes") {
              repositories(first:5) {
                totalCount
                edges {
                  node {
                    id
                    primaryLanguage {
                      name
                    }
                  }
                }
              }
            }
          }
        `
      })
      .then(result => console.log(result))

  }
}

export default GithubGraphQL