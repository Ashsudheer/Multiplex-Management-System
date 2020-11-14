import axios from 'axios';

const SHOWS_API_BASE_URL = "http://localhost:8081/api/v1";

class ShowService {

    getShowsByMovie(movieId){
        return axios.get(SHOWS_API_BASE_URL+'/shows/'+movieId);
    }

    getDatesByMovie(movieId){
        return axios.get(SHOWS_API_BASE_URL+'/dates/'+movieId);
    }

    getDatesByMovieAndDay(movieId, showDay){
        return axios.get(SHOWS_API_BASE_URL+'/shows/'+movieId+"/"+showDay);
    }

}

export default new ShowService()