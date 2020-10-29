import React, {Component} from 'react';
import './App.css';
import CustomerService from '../services/CustomerService';
//import SignUpConfirmationPopUp from "./SignUpConfirmationPopUp";

class UserSignUp extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            email: '',
            contactNo: '',
            cname: '',
            created: false
        }

        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeFirstnameHandler = this.changeFirstnameHandler.bind(this);
        this.changeLastnameHandler = this.changeLastnameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeContactNoHandler = this.changeContactNoHandler.bind(this);
        this.cancel = this.cancel.bind(this);
        this.signUp = this.signUp.bind(this);

    }
    
    changeUsernameHandler = (event) => {
        this.setState({username: event.target.value});
    }

    changeFirstnameHandler = (event) => {
        this.setState({firstname: event.target.value});
    }

    changePasswordHandler = (event) => {
        this.setState({password: event.target.value});
    }

    changeLastnameHandler = (event) => {
        this.setState({lastname: event.target.value});
    }

    changeEmailHandler = (event) => {
        this.setState({email: event.target.value});
    }

    changeContactNoHandler = (event) => {
        this.setState({contactNo: event.target.value});
    }

    cancel = (e) => {
        this.props.history.push('/UserLogin');
    }


    signUp = (e) => {
            e.preventDefault();
            this.setState({cname: this.state.firstname+" "+this.state.lastname});
            let customer = {username: this.state.username, password: this.state.password, cname: this.state.cname, email: this.state.email, contactNo: this.state.contactNo};
            console.log('customer => ' + JSON.stringify(customer));

            CustomerService.createCustomers(customer).then(res => {
            
                this.setState({
                    created: !this.state.created
                });
                this.forceUpdate();
            });
    }



    render(){
        return (
            <div className="login">
                {
                this.state.created?
                <div class="container">
                <label htmlFor="Reroute"> Signed Up. Sign in to continue</label>
                <div className="login-buttons">
                        <button class="btn-success" onClick={this.cancel} > Sign In </button>
                </div>
                </div>
                :
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
                    <label htmlFor="FirstName">First Name</label>
                    <input type="text" id="FirstName" name="FirstName" 
                    value={this.state.firstname} onChange={this.changeFirstnameHandler} /><br />
                    <label htmlFor="LastName">Last Name</label>
                    <input type="text" id="LastName" name="LastName" 
                    value={this.state.lastname} onChange={this.changeLastnameHandler} /><br />
                    <label htmlFor="Email">Email</label>
                    <input type="text" id="email" name="email" 
                    value={this.state.email} onChange={this.changeEmailHandler} /><br />
                    <label htmlFor="ContactNo">Phone Number</label>
                    <input type="text" id="contactno" name="contactno" 
                    value={this.state.contactno} onChange={this.changeContactNoHandler} /><br />
                    <div className="login-buttons">
                        <button onClick={this.signUp}> SIGN UP </button>
                        <button class="btn-danger" onClick={this.cancel} > Cancel </button>
                    </div>
                </div>
                }
            </div>
        );
    }
}

export default UserSignUp;