import React, {Component} from 'react';
import './App.css';
import Navbar1 from './Navbar1';
import Tickets from './Tickets';

class UserTickets extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            
        };

    }

    render(){
        return (
            <div>
                <Navbar1 />
                <Tickets />
            </div>
        );
    }
}

export default UserTickets;