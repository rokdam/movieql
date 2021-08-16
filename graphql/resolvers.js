import { getMovies } from "./db";

//쿼리를 해결하는 파일
const resolvers = {
    Query : {
        movies : (_, {limit, rating}) => getMovies(limit, rating)
    }
};

export default resolvers;