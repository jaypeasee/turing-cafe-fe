import React, { Component } from 'react';
import './App.css';
import Reservations from '../Reservations/Reservations'
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

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

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
