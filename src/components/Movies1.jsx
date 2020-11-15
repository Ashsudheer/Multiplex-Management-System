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

        // this.blobToImage = this.blobToImage.bind(this);

    }

    

    componentDidMount(){
        MovieService.getAllMovies().then((res) => {
            this.setState({ movies: res.data});
            console.log(res.data);
        })
    }

    // blobToImage = (Id) => {
    //     let poster_url = "http://localhost:8081/api/v1/movies/"+Id.toString();
    //     console.log(poster_url);
    //     return poster_url;
    // }


    render(){
        return (
            <div className="align-items-center">
                <div className="container-fluid">
                    <div className="row" style={{margin:'2rem'}}>
                        {
                            this.state.movies.map(
                                (movie,index) =>{
                                    return(
                                    <div className="col-sm-6 col-lg-2">
                                        <div className="card mb-3 text-white" key={index}>
                                            <img className="card-img-top" src={movie.poster} alt="Card"/>
                                            <div className="card-body">
                                                <h5 className="card-title text-center"> {movie.movieName}  </h5><br></br>
                                                {/* <p className="card-text"> {movie.synopsis} </p> */}
                                                <p className="card-text text-center"><small className="text-muted"> {movie.duration} </small></p>
                                            </div>
                                        </div>
                                        {/* <div className="movie-card" style={{display:'block',backgroundColor:'white',width:'100%',marginBottom:'1rem',padding:'0.2rem'}} >
                                            <div style={{width:'100%'}}>
                                                <img src={movie.poster} alt='' style={{width:'100%',margin:'0rem'}}></img>
                                            </div>
                                            <div style={{display:'block'}}>
                                                <h5 className="movie-title text-center" style={{color:'white'}}> {movie.movieName}  </h5>
                                                <p className="movie-text"><small className="text-muted"> {movie.duration} </small></p>
                                            </div>
                                        </div> */}
                                    </div>
                                    );
                                }
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Movies1;