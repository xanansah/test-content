const { ApolloServer, gql } = require("apollo-server-lambda")

// construct a schema
const typeDefs = gql`
  type Query {
    hello: String
  }
`
// provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

exports.graphqlHandler = server.createHandler()
