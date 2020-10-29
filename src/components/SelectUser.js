import React, {Component} from 'react';
import './App.css';
import UserCard from './resources/UserCard.jpg';
import EmployeeCard from './resources/EmployeeCard.jpg';
import AdminCard from './resources/AdminCard.jpg';

class SelectUser extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
        }

        this.user = this.user.bind(this);

    }

    user = (e) => {
        this.props.history.push('/UserLogin');
    }


    render(){
        return (
            <div class="d-flex align-items-center min-vh-100">
            <div class="container">
            <div class="card-deck">
                <div class="card mb-3 text-white text-center" onClick={this.user}>
                    <img class="card-img-top" src={UserCard} alt="Card"/>
                    <div class="card-body">
                        <h5 class="card-title"> User </h5>
                    </div>
                </div>
                <div class="card mb-3 text-white text-center">
                    <img class="card-img-top" src={EmployeeCard} alt="Card"/>
                    <div class="card-body">
                        <h5 class="card-title"> Employee </h5>
                    </div>
                </div>
                <div class="card mb-3 text-white text-center">
                    <img class="card-img-top" src={AdminCard} alt="Card"/>
                    <div class="card-body">
                        <h5 class="card-title"> Admin </h5>
                    </div>
                </div>
            </div>
            </div>
            </div>

             /* <div className="login">
                    <div className="login-form">
                        <div className="icon">
                            <i className="fas fa-user-circle"></i>
                            <i class="fas fa-ticket-alt"></i>
                            <i class="fas fa-file-video"></i>
                        </div>
                        <div>
                            <button type="button" class="btn btn-outline-dark"> User </button>
                            <button type="button" class="btn btn-outline-dark"> Employee </button>
                            <button type="button" class="btn btn-outline-dark"> Admin </button>
                        </div>
                    </div>
                </div>  */
        );
    }
}

export default SelectUser;