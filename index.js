import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers"

const server = new GraphQLServer({
    //환경설정을 여기 넣어주면 됨
    typeDefs : "./graphql/schema.graphql",
    resolvers
})

server.start(() => console.log("GraphQL Server Running "))