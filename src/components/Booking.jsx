import React, {Component} from 'react';
import './App.css';

class Booking extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            movieId: this.props.movieId,
            showId: this.props.showId
        }

    }

    render(){
        return (
            <div>
                <h2> Booking {this.state.movieId} {this.state.showId}</h2>
            </div>
        );
    }
}

export default Booking;