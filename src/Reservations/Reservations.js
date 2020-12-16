import React from 'react'
import './Reservations.css'
import reservationCards from '../ReservationCard/ReservationCard'

const Reservations = (props) => {
    const reservationCards = props.reservations.map(resy => {
        <ReservationCard 
            id={resy.id}
            name={resy.name}
            date={resy.date}
            time={resy.time}
            number={resy.number}
        />
    })
    return (
        <section className="resy-card">
            {reservationCard}
        </section>
    )
}

export default Reservations