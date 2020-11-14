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
        this.admin = this.admin.bind(this);

    }

    admin = (e) => {
        console.log('clicked');
        this.props.history.push('/admin');
    }

    user = (e) => {
        this.props.history.push('/UserLogin');
    }
    
    render(){
        return (
            <div className="d-flex align-items-center min-vh-100">
            <div className="container">
            <div className="card-deck">
                <div className="card mb-3 text-white text-center" onClick={this.user}>
                    <img className="card-img-top" src={UserCard} alt="Card"/>
                    <div className="card-body">
                        <h5 className="card-title"> User </h5>
                    </div>
                </div>
                <div className="card mb-3 text-white text-center">
                    <img className="card-img-top" src={EmployeeCard} alt="Card"/>
                    <div className="card-body">
                        <h5 className="card-title"> Employee </h5>
                    </div>
                </div>
                <div className="card mb-3 text-white text-center" onClick={this.admin}>
                    <img className="card-img-top" src={AdminCard} alt="Card"/>
                    <div className="card-body">
                        <h5 className="card-title"> Admin </h5>
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