import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import CustomerService from '../services/CustomerService';

class Login extends Component {
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
    }
    
    changeUsernameHandler = (event) => {
        console.log('Username changed');
        this.setState({username: event.target.value});
    }

    changePasswordHandler = (event) => {
        this.setState({password: event.target.value});
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

        /* if(this.state.password_retrieved === this.state.password){
            console.log('Same passwords')
            this.props.history.push('/home');
        }
        else{
            console.log('Different passwords')
        } */
    }

    render(){
        return (
            <div className="login">
                <div className="login-form">
                    <div className="icon">
                        <i className="fas fa-user-circle"></i>
                    </div>
                    <label htmlFor="Username">Username</label>
                    <input type="text" id="username" name="Username" 
                    value={this.state.username} onChange={this.changeUsernameHandler} /><br />
                    <label htmlFor="Password">Password</label>
                    <input type="password" name="Password" id="password"
                    value={this.state.password} onChange={this.changePasswordHandler} /><br />
                    <div className="login-buttons">
                        <Link to="">
                            <button onClick={this.logIn} > SIGN IN </button>
                        </Link>
                        <Link to="home">
                            <button>SIGN UP</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;