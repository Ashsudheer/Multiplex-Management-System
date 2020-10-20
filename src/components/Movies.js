import React,{useState} from 'react';
import MovieItem from './MovieItem';
import './App.css';
import './Navbar.css';

function Movies(){

    const [display,setDisplay] = useState("none");
    const [height,setHeight] = useState("0");
    const [name,setName] = useState("");
    const [dir,setDir] = useState("");
    const [act,setAct] = useState("");
    const [date,setDate] = useState("");
    const [dur,setDur] = useState("");
    const [des,setDes] = useState("");

    const expand = () => {
        display==="none"?setDisplay("block"):setDisplay("none");
        display==="none"?setHeight("100%"):setHeight("0");
    }

    const [movies,setMovies] = useState([
        {
            name: "Movie 1",
            directors: "Lorem Ipsum...",
            actors: "Lorem Ipsum...",
            date: "Lorem Ipsum...",
            duration: "Lorem Ipsum...",
            description:"Lorem Ipsum..."
        },
        {
            name: "Movie 2",
            directors: "Lorem Ipsum...",
            actors: "Lorem Ipsum...",
            date: "Lorem Ipsum...",
            duration: "Lorem Ipsum...",
            description:"Lorem Ipsum..."
        },
        {
            name: "Movie 3",
            directors: "Lorem Ipsum...",
            actors: "Lorem Ipsum...",
            date: "Lorem Ipsum...",
            duration: "Lorem Ipsum...",
            description:"Lorem Ipsum..."
        }
    ]);

    const submit = (e) => {
        e.preventDefault()
        setMovies([
            ...movies,
            {
                name:name,
                directors:dir,
                actors:act,
                date:date,
                duration:dur,
                description:des
            }
        ]);
    }

    return (
        <div className="movies">
            <h1>Movies</h1>
            <div className="movies-list" id="movies-list">
                {movies.map((movie,index)=>(
                    <MovieItem key={index} movie={movie}/>
                ))}
            </div>
            <div style={{width:'100%',padding:'30px'}}>
                <button style={{margin:'10px'}}>Delete</button>
                <button className="add" onClick={expand} style={{margin:'10px'}}>Add</button>
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
                    <input id="submit" type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    );
}

export default Movies;