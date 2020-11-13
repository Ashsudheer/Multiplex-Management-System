import React, {Component} from 'react';
import './App.css';

class Booking extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            movieId: this.props.movieId
        }

    }

    render(){
        return (
            <div>
                <h2> Booking {this.state.movieId}</h2>
            </div>
        );
    }
}

export default Booking;