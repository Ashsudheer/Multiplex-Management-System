import React, {Component} from 'react';
import './App.css';
import Movies1 from './Movies1';
import Navbar1 from './Navbar1';

class UserHome extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            
        };

    }

    render(){
        return (
            <div>
                <Navbar1 />
                <Movies1 />
            </div>
        );
    }
}

export default UserHome;