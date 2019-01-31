import ApolloClient from "apollo-boost"
import gql from "graphql-tag"

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: "bearer 40d34f73969d8625aba96ea26a683f00023f121a"
  }
})

const GithubGraphQL = {
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