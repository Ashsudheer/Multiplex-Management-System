import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router-dom';
import './Navbar.css';
import './App.css';

class Navbar1 extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
        }

        // this.signOut = this.signOut.bind(this);

    }

    // signOut = (e) => {
    //     this.props.history.push('/');
    // }


    render(){
        return (
            <header>
                <a href="/" className="logo">MMS</a>
                <nav>
                    <ul className="nav-links">
                        <li><a href="/">Movies</a></li> 
                        <li><a href="/UserTickets">Tickets</a></li> 
                    </ul>
                </nav>
                {/* <button onClick={this.signOut} >Sign Out</button> */}
                <Link to="/"><button>Sign Out</button></Link>
            </header>
        );
    }
}

export default Navbar1;