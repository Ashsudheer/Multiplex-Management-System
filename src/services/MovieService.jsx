import axios from 'axios';

const MOVIES_API_BASE_URL = "http://localhost:8081/api/v1/movies";

class MovieService {

    getAllMovies(){
        return axios.get(MOVIES_API_BASE_URL);
    }

    addMovie(data){
        console.log(data);
        return axios.post(MOVIES_API_BASE_URL,data).catch(error=>{
            console.log(error.response);
        });
    }

    getMovieNameByMovieId(movieId){
        return axios.get(MOVIES_API_BASE_URL+"/name/"+movieId);
    }

}

export default new MovieService()