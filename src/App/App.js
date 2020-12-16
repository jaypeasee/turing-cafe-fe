import React, { Component } from 'react';
import './App.css';
import Reservations from '../Reservations/Reservations'
import ReservationForm from '../ReservationForm/ReservationForm'
import {getAllReservations} from '../apiCalls.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: [],
      error: ""
    }
  }

  componentDidMount() {
    getAllReservations()
      .then(data => this.setState({
        reservations: data
      }))
      .catch(errorMessage => this.setState({
        error: errorMessage
      }))
  }

  makeReservation = (newResy) => {
    this.setState({
      reservations: [...this.state.reservations, newResy]
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <ReservationForm 
            makeReservation={this.makeReservation}
          />
        </div>
        <div className='resy-container'>
          <Reservations 
            reservations={this.state.reservations}
          />
        </div>
      </div>
    )
  }
}

export default App;
