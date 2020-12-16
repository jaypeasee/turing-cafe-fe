import React from 'react'
import './Reservations.css'
import ReservationCard from '../ReservationCard/ReservationCard'

const Reservations = (props) => {
    const reservationCards = props.reservations.map(resy => {
        return (
            <ReservationCard 
                id={resy.id}
                name={resy.name}
                date={resy.date}
                time={resy.time}
                number={resy.number}
            />
        )
    })
    return (
        <section className="resy-cards">
            {reservationCards}
        </section>
    )
}

export default Reservations