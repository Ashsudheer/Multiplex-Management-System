import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function Login(){
    return (
        <div className="login">
            <div className="login-form">
                <div className="icon">
                    <i className="fas fa-user-circle"></i>
                </div>
                <label htmlFor="Username">Username</label>
                <input type="text" id="username" name="Username" /><br />
                <label htmlFor="Password">Password</label>
                <input type="password" name="Password" id="password" /><br />
                <div className="login-buttons">
                    <Link to="/home">
                        <button>SIGN IN</button>
                    </Link>
                    <Link to="home">
                        <button>SIGN UP</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;