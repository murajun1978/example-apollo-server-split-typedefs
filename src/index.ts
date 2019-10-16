import { ApolloServer, gql } from "apollo-server";
import { typeDefs } from "./typeDefs";

const books = [
  {
    title: "titleA",
    author: "authorA"
  },
  {
    title: "titleB",
    author: "authorB"
  }
];

const resolvers = {
  Query: {
    books: () => books
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`Server start at ${url}`));
