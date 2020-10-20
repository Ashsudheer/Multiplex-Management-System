import React from 'react';
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
            <a className="signout" href="/"><button>Sign Out</button></a>
        </header>
    );
}

export default Navbar;