import React, { Component } from 'react';
import './App.css';
import Reservations from '../Reservations/Reservations'
import ReservationForm from '../ReservationForm/ReservationForm'
import {getAllReservations, postNewReservation} from '../apiCalls.js'

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
    postNewReservation(newResy)
    this.setState({
      reservations: [...this.state.reservations, newResy]
    })
  }

  cancelReservation = (resyID) => {
    this.setState({
      reservations: this.state.reservations.filter(resy => {
        return resy.id !== resyID
      })
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
            cancelReservation={this.cancelReservation}
          />
        </div>
      </div>
    )
  }
}

export default App;
