import React, {Component} from 'react';
import './Navbar.css';
import './App.css';
import Shows from './Shows';
import CustomerService from '../services/CustomerService';

class Tickets extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            tickets: [],
            isShows: false,
            selectedMovie: ''
        }

        
        this.back = this.back.bind(this);
        this.MovieSelect = this.MovieSelect.bind(this)
    }

    componentDidMount(){
        CustomerService.getAllTickets().then((res) => {
            this.setState({ tickets: res.data});
        })
    }


    back = (e) => {
        this.setState({isShows: !this.state.isShows});
        this.forceUpdate();
    }

    MovieSelect = (Id) => {
        this.setState({isShows: !this.state.isShows,
        selectedMovie: Id});
        this.forceUpdate();
    }

    render(){
        return (
            <div class="container">
            {this.state.isShows?
                <div class="container">
                    <button class="btn-danger" onClick={this.back} > Back </button>
                    <Shows movieId={this.state.selectedMovie}/> 
                </div>
            :
                <div class="container">
                    <h2 class="text-center" > TICKETS </h2>
                    <table className = "table table-striped table-bordered text-white">
                        <thead>
                            <tr>
                                <th> Ticket Number </th>
                                <th> No of Seats </th>
                                <th> Price </th>
                                <th> Date </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.tickets.map(
                                    ticket =>
                                    <tr key = {ticket.id}>
                                        <td> {ticket.ticketNo} </td>   
                                        <td> {ticket.noSeats} </td>
                                        <td> {ticket.totalPrice} </td>
                                        <td> {ticket.ticketDay} </td>
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