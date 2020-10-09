import { app } from "./app";
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from "type-graphql";
import { UserResolver } from "./graphql/resolvers/UserResolver";

async function startServer() {
  const server = new ApolloServer(
    {
      context: ({req,res}) => ({req,res}),
      schema: await buildSchema({
        resolvers: [UserResolver]
      })
    }
    );
 
    server.applyMiddleware({ app });

    app.listen(process.env.PORT || 8000, () =>
    console.log(`🚀 Server ready at http://localhost:8000/graphql`)
   );

    return server;
  
}

export default startServer;