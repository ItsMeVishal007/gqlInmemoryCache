import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";
import mongoose from "mongoose";

async function startApolloServer(typeDefs, resolvers) {
  await mongoose.connect(
    "mongodb+srv://drcyberx:drcyberx@cluster0.yyra3.mongodb.net/company?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true
    }
  );
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  const app = express();
  server.applyMiddleware({ app });
  await new Promise((resolve) => app.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer(typeDefs, resolvers);
