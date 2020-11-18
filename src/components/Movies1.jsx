import React, {Component} from 'react';
import './Navbar.css';
import './App.css';
import MovieService from '../services/MovieService'
import Shows from './Shows';

class Movies1 extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            movies: [],
            isShows: false,
            selectedMovie: ''
        }

        this.blobToImage = this.blobToImage.bind(this);
        this.back = this.back.bind(this);
        this.MovieSelect = this.MovieSelect.bind(this)
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

    back = (e) => {
        //console.log(this.state.selectedMovie);
        this.setState({isShows: !this.state.isShows});
        this.forceUpdate();
    }

    MovieSelect = (Id) => {
        //console.log(Id);
        this.setState({isShows: !this.state.isShows,
        selectedMovie: Id});
        this.forceUpdate();
    }
 //movieId={this.state.selectedMovie}

    render(){
        return (
            <div class="container">
            {this.state.isShows?
                <div class="container">
                    <button class="btn-danger" onClick={this.back} > Back </button>
                    <Shows movieId={this.state.selectedMovie}/> 
                </div>
            :
                <div class="container">
                    <h2 class="text-center mb-3" > NOW PLAYING </h2>
                    <div class="d-flex align-items-center ">
                    <div class="container">
                    <div class="card-deck">
                        {
                            this.state.movies.map(
                                movie =>
                                <div class="card mb-3 text-white" onClick={() => this.MovieSelect(movie.movieId)} >
                                    <img class="card-img-top" src={this.blobToImage(movie.movieId)} alt="Card" style={{height:'25rem'}} />
                                    <div class="card-body" style={{height:'20rem'}}>
                                        <h5 class="card-title text-center"> {movie.movieName}  </h5>
                                        <p class="card-text"> {movie.synopsis} </p>
                                    </div>
                                    <p class="card-text align-text-bottom"><small class="text-muted"> {movie.genre} </small></p>
                                </div>
                            )
                        }
                    </div>
                    </div>
                    </div>
                </div>
            }
            </div>
        );
    }
}

export default Movies1;