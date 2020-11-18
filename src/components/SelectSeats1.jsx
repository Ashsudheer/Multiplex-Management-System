import React, {Component} from 'react';
import ShowService from '../services/ShowService';
import './App.css';
import Payment from './Payment';

class SelectSeats1 extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            rows: [],
            isPayment: false,
            movieId: this.props.movieId,
            showId: this.props.showId,
            screenId: this.props.screenId,
            selectedRows: '',
            selectedSeats: '',
            alph: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        }

        this.selectSeat = this.selectSeat.bind(this);
    }

    componentDidMount(){
        ShowService.getRowsByScreen(this.state.screenId).then((res) => {
            this.setState({ rows: res.data});
        })
    }

    selectSeat = (event) => {
        console.log(event);
        /* this.setState({
            selectedRows: this.state.selectedRows.concat(rowId),
            selectedSeats: this.state.selectedSeats.concat(seatNum)
        });
        console.log(this.state.selectedRows);
        console.log(this.state.selectedSeats); */
    }

    render(){
        return (
            <div class="container">
            {this.state.isPayment?
                <div class="container">
                    <Payment /> 
                </div>
            :
                <div class="container">
                    <h2> SELECT SEATS </h2>
                    <div class="container">
                    <form onsubmit={this.selectSeat()}>
                        {
                            this.state.rows.map(
                                (row, j) =>
                                <div class="row">
                                    <div class="col justify-content-end">
                                    <p class="text-white" > {this.state.alph[j]} </p>
                                    </div>
                                    <div class="col justify-content-end">
                                    {
                                        [...Array(row.noLeft)].map((x, i) =>
                                            <label class="btn btn-secondary">
                                                <input type="checkbox" name="langs[]" id="langs_perl" value="Perl" /> {i+1}
                                            </label>
                                        )
                                    }   
                                    </div>
                                    <div class="col justify-content-center">
                                    {
                                        [...Array(row.noMiddle)].map((x, i) =>
                                            <label class="btn btn-secondary">
                                                <input type="checkbox" name="langs[]" id="langs_perl" value="Perl" /> {row.noLeft+i+1}
                                            </label>
                                        )
                                    }
                                    </div>
                                    <div class="col justify-content-start">
                                    {
                                        [...Array(row.noRight)].map((x, i) =>
                                        <label class="btn btn-secondary">
                                        <input type="checkbox" name="langs[]" id="langs_perl" value="Perl" /> {row.noLeft+row.noMiddle+i+1}
                                    </label>
                                        )
                                    }
                                    </div>
                                </div>
                            )
                        }
                    <div>
                    <label class="btn btn-success">
                        <input class="bg-transparent" type="submit" name="submit" value="Book Tickets"/>
                    </label>
                    </div>
                    </form>
                    </div>
                </div>
            }
            </div>
        );
    }
}

export default SelectSeats1;