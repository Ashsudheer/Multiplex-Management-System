import axios from 'axios';

const MOVIES_API_BASE_URL = "http://localhost:8081/api/v1/movies";

class MovieService {

    getAllMovies(){
        return axios.get(MOVIES_API_BASE_URL);
    }

    addMovie(data){
        return axios.post(MOVIES_API_BASE_URL,data);
    }


}

export default new MovieService()