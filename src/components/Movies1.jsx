import React, {Component} from 'react';
import './Navbar.css';
import './App.css';
import MovieService from '../services/MovieService';
import MovieCard from './MovieCard';

class Movies1 extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            movies: [],
            loading:true,
        }

        // this.blobToImage = this.blobToImage.bind(this);

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
                                    <div className=" col-lg-2">
                                        {/* <div 
                                            className="movie-card" 
                                            style={{display:'block',width:'100%',marginBottom:'1rem',padding:'0.1rem'}} 
                                        >
                                            <div className="movie-card-image" style={{width:'100%'}}>
                                                <img src={movie.poster} alt='' style={{width:'100%',margin:'0rem'}}></img>
                                            </div>
                                            <div className="movie-card-info" style={{margin:'auto',display:'none'}}>
                                                <div style={{display:'block'}}>
                                                    <h1 style={{fontSize:'30px',fontWeight:'5px'}}>{movie.movieName}</h1>
                                                    <h1 style={{fontSize:'20px',fontWeight:'5px'}}>{movie.duration+' mins'}</h1>
                                                    <button style={{width:'75%',borderRadius:'0',backgroundColor:' rgba(0,136,169,0.)'}}>Watch</button>
                                                </div>
                                            </div>
                                        </div> */}
                                        {!this.loading && <MovieCard movie={movie}/>}
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