import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Movies from './Movies';
import Screens from './Screens';
import CustomerService from '../services/CustomerService';

class UserHome extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            username: '',
            password: '',
            password_retrieved: 'hello'
        }

        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.logIn = this.logIn.bind(this);
        this.back = this.back.bind(this);
    }
    
    changeUsernameHandler = (event) => {
        console.log('Username changed');
        this.setState({username: event.target.value});
    }

    changePasswordHandler = (event) => {
        this.setState({password: event.target.value});
    }

    back = (e) => {
        this.props.history.push('/');
    }

    logIn = (e) => {
        CustomerService.getCustomerByUsername(this.state.username).then((res) => {
            console.log('response => ' + JSON.stringify(res.data));
            this.setState({password_retrieved: res.data.password});
            if(this.state.password_retrieved === this.state.password){
                console.log('Same passwords')
                this.props.history.push('/home');
            }
            else{
                console.log('Different passwords')
            }
        });

    }

    render(){
        return (
            <div>
                <Navbar />
                <Movies />
                <Screens />
            </div>
        );
    }
}

export default UserHome;