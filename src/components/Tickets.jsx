import React, {Component} from 'react';
import './Navbar.css';
import './App.css';
import CustomerService from '../services/CustomerService';
//import ShowService from '../services/ShowService';
//import MovieService from '../services/MovieService';
import ViewTicket from './ViewTicket';

class Tickets extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            tickets: [],
            isTicket: false,
            selectedTicket: '',
            movieId: '',
            movieName: ''
        }

        
        this.outputstates = this.outputstates.bind(this);
        this.MovieSelect = this.MovieSelect.bind(this);
        this.getMovieName = this.getMovieName.bind(this);
    }

    componentDidMount(){
        CustomerService.getAllTickets().then((res) => {
            this.setState({ tickets: res.data});
        })
    }


    outputstates = (e) => {
        console.log(this.state.movieId);
        console.log(this.state.movieName);
    }

    MovieSelect = (Id) => {
        this.setState({isShows: !this.state.isShows,
        selectedMovie: Id});
        this.forceUpdate();
    }

    viewTicket = (Id) => {
        this.setState({isTicket: !this.state.isTicket,
            selectedTicket: Id},
            function () {
                console.log(this.state.isTicket, this.state.selectedTicket, Id);
              });
        //console.log(this.state.isTicket, this.state.selectedTicket, Id);
        this.forceUpdate();
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.movieId === nextState.movieId;
    }

    getMovieName = (showId) => {
        /* ShowService.getMovieByShow(showId).then((res) => {
            this.setState({ movieId: res.data},
                function () {
                    console.log(this.state.movieName);
                  });
        });
        console.log(this.state.movieId); */
        //let movieName = MovieService.
        if(showId === 1)
            return "Joker";
        else
            return "Grave of the fireflies";
        //return this.state.movieId;
    }

    render(){
        return (
            <div class="container">
            {this.state.isTicket?
                <div class="container">
                    <button class="btn-danger" onClick={this.back} > Back </button>
                    <ViewTicket ticketNo={this.state.selectedTicket}/> 
                </div>
            :
                <div class="container">
                    <h2 class="text-center mb-3" > TICKETS </h2>
                    <table className = "table table-striped table-bordered text-white">
                        <thead>
                            <tr>
                                <th> Ticket Number </th>
                                <th> Movie </th>
                                <th> No of Seats </th>
                                <th> Price </th>
                                <th> Date </th>
                                <th> Actions </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.tickets.map(
                                    ticket =>
                                    <tr key = {ticket.id}>
                                        <td> {ticket.ticketNo} </td>  
                                        <td> {this.getMovieName(ticket.showId)} </td> 
                                        <td> {ticket.noSeats} </td>
                                        <td> {ticket.totalPrice} </td>
                                        <td> {ticket.ticketDay} </td>
                                        <td> 
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.cancelTicket(ticket.ticketNo)} className="btn btn-danger"> Cancel </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewTicket(ticket.ticketNo)} className="btn btn-info"> View </button> 
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            }
            </div>
        );
    }
}

export default Tickets;