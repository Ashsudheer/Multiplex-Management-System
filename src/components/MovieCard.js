import React,{useState} from 'react';
import './App.css';

function MovieCard({movie,callback}){

    const [hover,sethover]=useState('hidden');
    

    const toggle = () => {
        sethover('display');
    }

    const toggleOut = () => {
        sethover('hidden');
    }

    const call = (movie) => {
        // console.log(movie.movieId);
        callback(movie.movieId);
    }

    return (
        <div 
            onMouseOver={toggle} onMouseLeave={toggleOut}
            className="movie-card" 
            style={{display:'block',width:'250px',height:'23rem',marginBottom:'1rem',padding:'0.1rem'}} 
        >
            <div className="movie-card-image" style={{width:'100%',height:'100%'}}>
                <img src={movie.poster} alt='' style={{width:'100%',objectFit:'cover',margin:'0rem'}}></img>
            </div>
            <div className={"movie-card-info movie-"+ hover} style={{margin:'auto',display:'none'}}>
                <div style={{display:'block'}}>
                    <h1 style={{fontSize:'20px',fontWeight:'5px'}}>{movie.movieName}</h1>
                    <h1 style={{fontSize:'18px',fontWeight:'5px'}}>{movie.duration+' mins'}</h1>
                    <button onClick={()=>call(movie)} style={{width:'75%',borderRadius:'0',backgroundColor:' rgba(0,136,169,0.)'}}>Watch</button>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;