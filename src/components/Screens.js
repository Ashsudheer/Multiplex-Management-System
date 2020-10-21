import React from 'react';
import './App.css';
import Screen from './Screen';

function Screens() {
    return(
        <div>
            <div className="screens">
                <h1>Screens</h1>
                <div className="screenList" style={{padding:'15px 50px'}}>
                    <button>Screen 1</button>
                    <button>Screen 2</button>
                    <button>Screen 3</button>
                    <button>Screen 4</button>
                    <button>Screen 5</button>
                </div>
            </div>
            <Screen />
        </div>
    );
}

export default Screens;