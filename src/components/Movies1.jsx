import React, {Component} from 'react';
import './Navbar.css';
import './App.css';
import MovieService from '../services/MovieService'

class Movies1 extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            movies: []
        }

        this.blobToImage = this.blobToImage.bind(this);

    }

    componentDidMount(){
        MovieService.getAllMovies().then((res) => {
            this.setState({ movies: res.data});
        })
    }

    blobToImage = (Id) => {
        let poster_url = "http://localhost:8081/api/v1/movies/"+Id.toString();
        console.log(poster_url);
        return poster_url;
    }


    render(){
        return (
            <div class="d-flex align-items-center min-vh-100">
            <div class="container">
            <div class="card-deck">
                {
                    this.state.movies.map(
                        movie =>
                        <div class="card mb-3 text-white">
                            <img class="card-img-top" src={this.blobToImage(movie.movieId)} alt="Card"/>
                            <div class="card-body">
                                <h5 class="card-title text-center"> {movie.movieName}  </h5>
                                <p class="card-text"> {movie.synopsis} </p>
                                <p class="card-text"><small class="text-muted"> {movie.genre} </small></p>
                            </div>
                        </div>
                    )
                }
            </div>
            </div>
            </div>
        );
    }
}

export default Movies1;