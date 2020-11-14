import React from 'react';
import './App.css';
import './Navbar.css';

function Screen() {
    const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return(
        <div className="shows">
            <div className="container">
                <div className="row">
                    <div className="col-sm-2">
                    </div>
                    <div className="col-sm-2">
                        <h1>10 AM</h1>
                    </div>
                    <div className="col-sm-2">
                        <h1>1 PM</h1>
                    </div>
                    <div className="col-sm-2">
                        <h1>4 PM</h1>
                    </div>
                    <div className="col-sm-2">
                        <h1>7 PM</h1>
                    </div>
                    <div className="col-sm-2">
                        <h1>10 PM</h1>
                    </div>
                </div>
                {days.map((day,index)=>(
                     <div className="row table" key={index}>
                        <div className="col-sm-2 days">
                            <h1>{day}</h1>
                        </div>
                        <div className="col-sm-2 cell">
                        </div>
                        <div className="col-sm-2 cell">
                        </div>
                        <div className="col-sm-2 cell">
                        </div>
                        <div className="col-sm-2 cell">
                        </div>
                        <div className="col-sm-2 cell">
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Screen;