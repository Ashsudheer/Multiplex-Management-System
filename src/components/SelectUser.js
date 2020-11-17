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

    admin = (e) => {
        console.log('clicked');
        this.props.history.push('/admin');
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
                <div class="card mb-3 text-white text-center" onClick={this.admin}>
                    <img class="card-img-top" src={AdminCard} alt="Card"/>
                    <div class="card-body">
                        <h5 class="card-title"> Admin </h5>
                    </div>
                </div>
            </div>
            </div>
            </div>

             /* <i className="fas fa-user-circle"></i>
                <i class="fas fa-ticket-alt"></i>
                <i class="fas fa-file-video"></i>  */
        );
    }
}

export default SelectUser;