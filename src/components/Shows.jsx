import React, {Component} from 'react';
import './App.css';
import ShowService from '../services/ShowService'
import SelectSeats from './SelectSeats';

class Shows extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            dates: [],
            times: [],
            movieId: this.props.movieId,
            isBooking: false,
            selectedShow: '',
            selectedDay: '',
            screenId: ''
        }

        this.formatdate = this.formatdate.bind(this);
        this.toggleDay = this.toggleDay.bind(this);
        this.formattime = this.formattime.bind(this);
        this.showSelect = this.showSelect.bind(this)
    }

    componentDidMount(){
        ShowService.getDatesByMovie(this.state.movieId).then((res) => {
            this.setState({ dates: res.data});
        })
    }

    formatdate = (date) => {
        var d = new Date(date);
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let dayMonth = d.getDate()+" "+months[d.getMonth()];
        return dayMonth;
    }

    toggleDay = (date) => {
        ShowService.getDatesByMovieAndDay(this.state.movieId, date).then((res) => {
            this.setState({ times: res.data,
            selectedDay: date});
        })
        this.forceUpdate();
    }

    formattime = (time) => {
        var d = time.split(":");
        var resTime;
        if(d[0] < "12")
        {
            resTime = parseInt(d[0])+":";
            if(d[1] > 9)
                resTime = resTime+parseInt(d[1])+" am";
            else
                resTime = resTime+"0"+parseInt(d[1])+" am";
        }
        else if(d[0] > "12")
        {
            var hours = (d[0]-12);
            resTime = parseInt(hours)+":";
            if(d[1] > 9)
                resTime = resTime+parseInt(d[1])+" pm";
            else
                resTime = resTime+"0"+parseInt(d[1])+" pm";
        } 
        else
        {
            resTime = parseInt(d[0])+":";
            if(d[1] > 9)
                resTime = resTime+parseInt(d[1])+" pm";
            else
                resTime = resTime+"0"+parseInt(d[1])+" pm";
        }
        return resTime;
    }

    showSelect = (time) => {
        ShowService.getScreenByMovieAndDay(this.state.movieId, this.state.selectedDay).then((res) => {
            this.setState({isBooking: !this.state.isBooking,
                selectedShow: time,
                screenId: res.data});
            this.forceUpdate();
        })
    }

    render(){
        return (
            <div class="container">
            {this.state.isBooking?
                <div class="container">
                    <SelectSeats movieId={this.state.movieId} showId={this.state.selectedShow} screenId={this.state.screenId} /> 
                </div>
            :
                <div class="container">
                    <h2> SHOWS </h2>
                    <div class="container">
                    <div class="btn-group justify-content-start" role="group" aria-label="Basic example">
                        {
                            this.state.dates.map(
                                date =>
                                <button type="button" class="btn btn-dark" onClick={() => this.toggleDay(date)}>
                                    {this.formatdate(date)}
                                </button>
                            )
                        }
                    </div>
                    </div>
                    <div class="container">
                        {
                            this.state.times.map(
                                time =>
                                <div class="container text-white">
                                <div class="row">
                                    <div class="col">
                                        <label>{this.formattime(time)}</label>
                                    </div>
                                    <div class="col">
                                        <button type="button" class="btn btn-dark" onClick={() => this.showSelect(time)} > Book </button>
                                    </div>
                                </div>
                                <div class="row"/>
                                </div>
                            )
                        }
                    </div>
                </div>
            }
            </div>
        );
    }
}

export default Shows;