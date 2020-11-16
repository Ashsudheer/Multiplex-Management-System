import React,{useState} from 'react';
import './App.css';

function MovieCard({movie}){

    const [hover,sethover]=useState('hidden');
    

    const toggle = () => {
        sethover('display');
    }

    const toggleOut = () => {
        sethover('hidden');
    }

    return (
        <div 
            onMouseOver={toggle} onMouseLeave={toggleOut}
            className="movie-card" 
            style={{display:'block',width:'100%',marginBottom:'1rem',padding:'0.1rem'}} 
        >
            <div className="movie-card-image" style={{width:'100%'}}>
                <img src={movie.poster} alt='' style={{width:'100%',margin:'0rem'}}></img>
            </div>
            <div className={"movie-card-info movie-"+ hover} style={{margin:'auto',display:'none'}}>
                <div style={{display:'block'}}>
                    <h1 style={{fontSize:'30px',fontWeight:'5px'}}>{movie.movieName}</h1>
                    <h1 style={{fontSize:'20px',fontWeight:'5px'}}>{movie.duration+' mins'}</h1>
                    <button style={{width:'75%',borderRadius:'0',backgroundColor:' rgba(0,136,169,0.)'}}>Watch</button>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;