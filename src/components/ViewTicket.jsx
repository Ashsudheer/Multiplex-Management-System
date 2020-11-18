import React, {Component} from 'react';
import './Navbar.css';
import './App.css';
import Shows from './Shows';
import CustomerService from '../services/CustomerService';
import MovieService from '../services/MovieService';
import ShowService from '../services/ShowService';

class ViewTicket extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            ticket: '',
            ticketNo: this.props.ticketNo,
            isTicket: false,
            movieId: '',
            screen: '',
            show: '',
            movieName: ''
        }

    }

    componentDidMount(){
        CustomerService.getTicket(this.state.ticketNo).then((res) => {
            this.setState({ ticket: res.data},
                function () {
                    console.log("ticket => ", this.state.ticket);
            });
            ShowService.getMovieByShow(this.state.ticket.showId).then((res) => {
                this.setState({movieId: res.data},
                    function () {
                        console.log("movieId => ", this.state.movieId);
                });
                MovieService.getMovieNameByMovieId(this.state.movieId).then((res) => {
                    this.setState({ movieName: res.data},
                        function () {
                            console.log("movieName => ", this.state.movieName);
                    });
                });
            });
            ShowService.getShowByShowId(this.state.ticket.showId).then((res) => {
                this.setState({ show: res.data},
                    function () {
                        console.log("show => ", this.state.show);
                });
                ShowService.getScreenNoByScreenId(this.state.show.screenId).then((res) => {
                    this.setState({ screen: res.data},
                        function () {
                            console.log("screen => ", this.state.screen);
                    });
                });
            });
        });
        
    }


    render(){
        return (
            <div class="container">
            {this.state.isTicket?
                <div class="container">
                    <button class="btn-danger" onClick={this.back} > Back </button>
                    <Shows movieId={this.state.selectedMovie}/> 
                </div>
            :
                <div class="container text-white">
                    <h2 class="text-center mb-3" > TICKET - {this.state.ticket.ticketNo} </h2>
                    <div class="container">
                        <div className="col">
                            <div className="row" style={{height:'10rem'}}>
                                <div className="col">
                                    <div className="row" style={{height:'5rem'}}>
                                        Ticket No: {this.state.ticket.ticketNo}
                                    </div>
                                    <div className="row" style={{height:'5rem'}}>
                                        Movie: {this.state.movieName}
                                    </div>
                                </div>
                                <div className="col">
                                    Screen {this.state.screen.screenNo}
                                </div>
                            </div>
                            <div className="row" style={{height:'5rem'}}>
                                <div className="col">
                                    Time: {this.state.show.startTime}
                                </div>
                                <div className="col">
                                    Day: {this.state.show.showDay}
                                </div>
                            </div>
                            <div className="row" style={{height:'5rem'}}>
                                <div className="col">
                                    No of Seats: {this.state.ticket.noSeats}
                                </div>
                                <div className="col">
                                    Price: {this.state.ticket.totalPrice}
                                </div>
                            </div>
                            <div className="row" style={{height:'10rem'}}>
                                Seats:
                            </div>
                        </div>
                        <div className="col">
                            <div className="row" style={{height:'5rem'}}>
                                Ticket No: {this.state.ticket.ticketNo}
                            </div>
                            <div className="row" style={{height:'5rem'}}>
                                Screen: {this.state.screen.screenNo}
                            </div>
                            <div className="row" style={{height:'5rem'}}>
                                Time: {this.state.show.startTime}
                            </div>
                            <div className="row" style={{height:'5rem'}}>
                                Day: {this.state.show.showDay}
                            </div>
                            <div className="row" style={{height:'10rem'}}>
                                Admits {this.state.ticket.noSeats}
                            </div>
                        </div>
                    </div>
                </div>
            }
            </div>
        );
    }
}

export default ViewTicket;