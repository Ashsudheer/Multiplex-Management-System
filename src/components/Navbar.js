import React from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css';
import './App.css';

function Navbar() {
    return (
        <header>
            <a href="/" className="logo">MMS</a>
            <nav>
                <ul className="nav-links">
                    <li><a href="/">Movies</a></li>
                    <li><a href="/">Screens</a></li>
                    <li><a href="/">About</a></li>    
                </ul>
            </nav>
            <Link to="/">
                <button>Sign Out</button>
            </Link>
        </header>
    );
}

export default Navbar;