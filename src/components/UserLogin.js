import React, {Component} from 'react';
import './App.css';
import CustomerService from '../services/CustomerService';

class UserLogin extends Component {
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
        this.signUp = this.signUp.bind(this);
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
                this.props.history.push('/UserHome');
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

    signUp = (e) => {
        this.props.history.push('/UserSignUp');
    }



    render(){
        return (
            <div className="login">
                <div className="login-form">
                    <h1 class="text-center"> User Login </h1>
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
                        <button onClick={this.logIn} > SIGN IN </button>
                        <button onClick={this.signUp}> SIGN UP </button>
                    </div>
                    <div className="login-buttons">
                        <button class="btn-danger" onClick={this.back} > Back </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserLogin;