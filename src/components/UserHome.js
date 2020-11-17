import React, {Component} from 'react';
import './App.css';
import Movies1 from './Movies1';
import Navbar1 from './Navbar1';

class UserHome extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            /* isMovies: true,
            isShows: false,
            isBooking: false */
        };

        //this.back = this.back.bind(this);
    }

/*     back = (e) => {
        if(this.isMovies === true)
            this.setState({isMovies: false});
        if(this.isShows === true)
            this.setState({isShows: false});
        if(this.isBooking === true)
            this.setState({isBooking: false});
        this.forceUpdate();
    } */

    render(){
        return (
            <div>
                <Navbar1 />
                <Movies1 />
                {/* <button class="btn-danger" onClick={this.back} > Back </button>
                {this.state.isMovies ? <Movies1 /> : null}
                {this.state.isMovies ? <Shows /> : null} */}
            </div>
        );
    }
}

export default UserHome;