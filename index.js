const { GraphQLServer } = require("graphql-yoga");

const server = new GraphQLServer({
    //환경설정을 여기 넣어주면 됨
})

server.start(() => console.log("GraphQL Server Running "))