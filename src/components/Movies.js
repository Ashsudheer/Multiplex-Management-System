import React,{useCallback, useEffect, useState} from 'react';
import MovieItem from './MovieItem';
import './App.css';
import './Navbar.css';
import MovieService from '../services/MovieService';


function Movies(){

    const [display,setDisplay] = useState("none");
    const [height,setHeight] = useState("0");
    const [name,setName] = useState("");
    const [dir,setDir] = useState("");
    const [act,setAct] = useState("");
    const [date,setDate] = useState("");
    const [dur,setDur] = useState("");
    const [des,setDes] = useState("");
    const [del,setDel] = useState(false);
    const [selects,setSelects] =useState([]);
    const [movies,setMovies] = useState([]);
    const [lan,setLan]=useState('');
    const [sub,setSub]=useState('');
    const [img,setImg]=useState('');

    const expand = () => {
        display==="none"?setDisplay("block"):setDisplay("none");
        display==="none"?setHeight("100%"):setHeight("0");
    }

    useEffect(()=>{
        MovieService.getAllMovies().then((res) => {
            console.log('data:',res.data);
            setImg(res.data[0]);
            for (var i = 0;i<res.data.length;i++){
                var info=res.data[i];
                setMovies([
                    ...movies,
                    {
                        id:info.movieId,
                        name:info.movieName,
                        directors:info.director,
                        actors:info.actor,
                        date:info.releaseDate,
                        duration:info.duration,
                        description:info.synopsis,
                        language:info.language,
                        subtitles:info.subtitle,
                        poster:info.poster
                    }
                ]);
            }
        })
    },[]);

    // const [movies,setMovies] = useState([
    //     {
    //         name: "Movie 1",
    //         directors: "Lorem Ipsum...",
    //         actors: "Lorem Ipsum...",
    //         date: "Lorem Ipsum...",
    //         duration: "Lorem Ipsum...",
    //         description:"Lorem Ipsum..."
    //     },
    //     {
    //         name: "Movie 2",
    //         directors: "Lorem Ipsum...",
    //         actors: "Lorem Ipsum...",
    //         date: "Lorem Ipsum...",
    //         duration: "Lorem Ipsum...",
    //         description:"Lorem Ipsum..."
    //     },
    //     {
    //         name: "Movie 3",
    //         directors: "Lorem Ipsum...",
    //         actors: "Lorem Ipsum...",
    //         date: "Lorem Ipsum...",
    //         duration: "Lorem Ipsum...",
    //         description:"Lorem Ipsum..."
    //     }
    // ]);

    const deleteMovie = () => {
        if (del===false) setDel(true);
        else setDel(false);
    }

    const select = useCallback(
        movie=>{
            var a = {
                name:movie.name,
                directors:movie.directors,
                actors:movie.actors,
                date:movie.date,
                duration:movie.duration,
                description:movie.description
            };
            if (selects.some(e => e.name===a.name)){ 
                setSelects(selects.filter(e => e.name!==a.name));
                // console.log("there");
                // console.log(selects);
            }
            else {
                setSelects([...selects,a]);
                // console.log("Not there");
                // console.log(selects);
            }
        },[selects,setSelects]
    );

    const submit = (e) => {
        e.preventDefault()
        var item = {
            movieName:name,
            director:dir,
            actors:act,
            releaseDate:date,
            duration:dur,
            synopsis:des,
            language:lan,
            subtitles:sub,
            poster:img,
            distibutor:'',
            genre:''
        }
        MovieService.addMovie(item).then((res) => {
            console.log('data:',res);
        })

        setMovies([
            ...movies,
            {
                name:name,
                directors:dir,
                actors:act,
                date:date,
                duration:dur,
                description:des,
                language:lan,
                subtitles:sub,
                poster:img
            }
        ]);
    }

    const deletions = () => {
        // console.log(selects);
        setMovies(movies.filter(e=>{
            for (var i=0;i<selects.length;i++){
                if (selects[i].name===e.name){
                    return false;
                }
            }
            return true;
        }));
        setSelects([]);
        setDel(false);
        // console.log(movies);
    }

    return (
        <div className="movies">
            <h1>Movies</h1>
            <div className="movies-list" id="movies-list">
                {movies.map((movie,index)=>(
                    <MovieItem key={index} movie={movie} option={del} select = {select}/>
                ))}
            </div>
            <div style={{width:'100%',padding:'30px'}}>
                <button onClick={deleteMovie} style={{margin:'10px'}}>Delete</button>
                <button className="add" onClick={expand} style={{margin:'10px'}}>Add</button>
                {del && <button onClick={deletions} style={{margin:'10px',float:'right'}}>Confirm Deletion</button>}
            </div>
            <div className="form" style={{display:display,maxHeight:height}}>
                <form className="addForm" onSubmit={submit}>
                    <h1>Enter Movie Data</h1>
                    <div>
                        <label htmlFor="Name">Movie Title</label>
                        <input type="text" id="name" name="Name" value={name} onChange={e=>setName(e.target.value)}/><br/>
                    </div>
                    <div>
                        <label htmlFor="Director">Director</label>
                        <input type="text" id="dir" name="Director" value={dir} onChange={e=>setDir(e.target.value)}/><br/>
                    </div>
                    <div>
                        <label htmlFor="Actor">Actor</label>
                        <input type="text" id="act" name="Actors" value={act} onChange={e=>setAct(e.target.value)}/><br/>
                    </div>
                    <div>
                        <label htmlFor="Description">Description</label>
                        <input type="text" id="des" name="Description" value={des} onChange={e=>setDes(e.target.value)}/><br/>
                    </div>
                    <div>
                        <label htmlFor="Date">Release Date</label>
                        <input type="text" id="date" name="Date" value={date} onChange={e=>setDate(e.target.value)}/><br/>
                    </div>
                    <div>
                        <label htmlFor="Duration">Duration</label>
                        <input type="text" id="dur" name="Duration" value={dur} onChange={e=>setDur(e.target.value)}/><br/>
                    </div>
                    <div>
                        <label htmlFor="Language">Language</label>
                        <input type="text" id="lan" name="Language" value={lan} onChange={e=>setLan(e.target.value)}/><br/>
                    </div>
                    <div>
                        <label htmlFor="Subtitles">Subtitles</label>
                        <input type="text" id="sub" name="Subtitles" value={sub} onChange={e=>setSub(e.target.value)}/><br/>
                    </div>
                    <div>
                        <label htmlFor="Language">Language</label>
                        <input type="text" id="lan" name="Language" value={lan} onChange={e=>setLan(e.target.value)}/><br/>
                    </div>
                    <input id="submit" type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    );
}

export default Movies;