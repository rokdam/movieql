export const people = [
    {
        id : 1,
        name : " Nicolas",
        age : 18,
        gender : "female",
    },
    {
        id:2,
        name : " Nicolas2",
        age : 19,
        gender : "male",
    },
    {
        id:3,
        name : " Nicolas3",
        age : 20,
        gender : "female",
    }
];

let movies = [
    {
        id: 0,
        name : "Start Wars - The new one",
        score : 1
    },
    {
        id: 1,
        name : "Avengers - The new one",
        score : 8
    },
    {
        id: 2,
        name : "The Godfather I",
        score : 99
    },
    {
        id: 3,
        name : "Logan",
        score : 2
    }
    
]

export const getById = id => {
    //filter는 모든 대상을 거쳐 해당 조건에 맞는 걸 리턴하는 것 
    const filteredPeople = people.filter(person => id === person.id);
    return filteredPeople[0];
}

export const getMovies = () => movies;
export const getMovieById = id => {
    const filteredMovie = movies.filter(movie => movie.id === id);
    return filteredMovie[0];
}

export const deleteMovie = (id) => {
    //선택한 id빼고 남은것만 저장(선택한 id값을 지움)
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    }else{
        return false;
    }
}

export const addMovie = (name, score) =>{
    const newMovie = {
        id: `${movies.length + 1}`, // movies배열 길이에 더하기 1
        name,
        score,
    }
    movies.push(newMovie);
    return newMovie;
}