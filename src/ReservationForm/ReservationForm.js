import React, {Component} from 'react'
import './ReservationForm.css'

class ReservationForm extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            date: "",
            time: "",
            number: ""
        }
    }

    updateInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    createNewResy = (event) => {
        event.preventDefault()
        const {name, date, time, number} = this.state;
        const newResy = {
            id: Date.now(),
            name,
            date,
            time,
            number: parseInt(number)
        }
        
    }

    render() {
        return (
            <form className="resy-form">
            <input 
                className="resy-form-input"
                name="name"
                placeholder="Name"
                value={this.state.name}
                onChange={this.updateInput}
            />
            <input 
                className="resy-form-input"
                name="date"
                placeholder="Date"
                value={this.state.date}
                onChange={this.updateInput}
            />
            <input 
                className="resy-form-input"
                name="time"
                placeholder="Time"
                value={this.state.time}
                onChange={this.updateInput}
            />
            <input 
                className="resy-form-input"
                name="number"
                placeholder="Number of Guests"
                value={this.state.number}
                onChange={this.updateInput}
            />
            <button
                className="resy-form-btn"
                onClick={this.createNewResy}
            >Make Reservation</button>
        </form>
        )
    }
}

export default ReservationForm