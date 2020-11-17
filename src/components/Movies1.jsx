import React, {Component} from 'react';
import './Navbar.css';
import './App.css';
import MovieService from '../services/MovieService';
import Shows from './Shows';
import MovieCard from './MovieCard';


class Movies1 extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            movies: [],
            loading:true,
            isShows: false,
            selectedMovie: ''
        }

        // this.blobToImage = this.blobToImage.bind(this);
        this.back = this.back.bind(this);
        this.MovieSelect = this.MovieSelect.bind(this)
    }

    toggle(info){
        console.log(info);
    }

    componentDidMount(){
        MovieService.getAllMovies().then((res) => {
            this.setState({ movies: res.data});
            this.setState({ loading: false})
            console.log(res.data);
        })
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
            <div class="container-fluid text-center">
            {this.state.isShows?
                <div class="container">
                    <button class="btn-danger" onClick={this.back} > Back </button>
                    <Shows movieId={this.state.selectedMovie}/> 
                </div>
            :
                <div class="container-fluid">
                    <h2> NOW PLAYING </h2>
                    {/* <div class="d-flex align-items-center min-vh-100">
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
                    </div> */}
                    {/* <div className="align-items-center"> */}
                        <div className="container-fluid">
                            <div className="row" style={{margin:'2rem'}}>
                                {
                                    this.state.movies.map(
                                        (movie,index) =>{
                                            return(
                                            <div className=" col-lg-2">
                                                {!this.loading && <MovieCard movie={movie} onClick={() => this.MovieSelect(movie.movieId)}/>}
                                            </div>
                                            );
                                        }
                                    )
                                }
                            </div>
                        </div>
                    </div>
                // </div>
            }
            </div>
        );
    }
}

export default Movies1;