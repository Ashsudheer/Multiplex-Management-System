import React,{useState} from 'react';
import './App.css';

function MovieItem({movie,option,select}){
    const [item,setItem] = useState("movie-item");
    const [info,setInfo] = useState("movie-info");
    const [display,setDisplay] = useState("none");
    const [height,setHeight] = useState("0");
    const [del,setDel] = useState(false);
    // var style={
    //     backgroundColor:'rgba(0,136,169,1)'
    // };

    const expandItem = () => {
        if (option){
            if (del){
                setDel(false);
            }
            else{
                setDel(true);
                // style = {
                //     backgroundColor:'white !important'
                // };
            }
            select(movie);
        }
        else {
            item==="movie-item"?setItem("movie-item activeButton"):setItem("movie-item");
            info==="movie-info"?setInfo("movie-info active"):setInfo("movie-info");
    
            if (display==="flex"){
                setDisplay("none");
                setHeight("0");
            }
            else {
                setDisplay("flex");
                setHeight("100%");
            }
        }
    }

    return (
        <div>
            <button className={item} style={ del ? { backgroundColor: 'rgba(0,136,169,0.8)'} : {backgroundColor:'rgba(0,136,169,1)'}} onClick={expandItem}>{movie.name}</button>
            <div className={info} style={{display:display,maxHeight:height}}>
                <div className="movie-image">
                    <img src={movie.poster} alt=""></img>
                    {/* <i className="fas fa-camera"></i> */}
                </div>
                <div className="movie-details">
                    <h1><strong>{movie.name}</strong></h1>
                    <p><strong>Directors:</strong>{movie.directors}</p>
                    <p><strong>Actors:</strong>{movie.actors}</p>
                    <p><strong>Release Date:</strong>{movie.date}</p>
                    <p><strong>Duration:</strong>{movie.duration}</p>
                    <p>{movie.description}</p>
                </div>
            </div>
        </div>
    );
}

export default MovieItem;