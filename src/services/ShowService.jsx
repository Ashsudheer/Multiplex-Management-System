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

    getScreenByMovieAndDay(movieId, showDay){
        return axios.get(SHOWS_API_BASE_URL+'/screen/'+movieId+"/"+showDay);
    }

    getRowsByScreen(screenId){
        return axios.get(SHOWS_API_BASE_URL+'/shapes/'+screenId);
    }

    async getMovieByShow(showId){
        return axios.get(SHOWS_API_BASE_URL+'/movieId/'+showId)
    }

    getShowByShowId(showId){
        return axios.get(SHOWS_API_BASE_URL+'/show/'+showId);
    }

    getScreenNoByScreenId(screenId){
        return axios.get(SHOWS_API_BASE_URL+'/screenNo/'+screenId);
    }

}

export default new ShowService()