import React, {Component} from 'react';
import './App.css';

class Shows extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            movieId: this.props.movieId
        }

    }

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
                    <h2> NOW PLAYING </h2>
                    <div class="d-flex align-items-center min-vh-100">
                    <div class="container">
                    <div class="card-deck">
                        {
                            this.state.movies.map(
                                movie =>
                                <div class="card mb-3 text-white" onClick={() => this.MovieSelect(movie.movieId)} >
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
                </div>
            }
            </div>
        );
    }
}

export default Shows;