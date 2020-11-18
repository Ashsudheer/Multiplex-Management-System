import React, {Component} from 'react';
import './App.css';

class Payment extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            isPayment: false,
            movieId: this.props.movieId,
            showId: this.props.showId,
            screenId: this.props.screenId
        }

    }

    render(){
        return (
            <div class="container">
                <h2> Payment </h2>
            </div>
        );
    }
}

export default Payment;