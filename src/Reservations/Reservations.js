import React from 'react'
import './Reservations.css'
import ReservationCard from '../ReservationCard/ReservationCard'

const Reservations = (props) => {
    const reservationCards = props.reservations.map(resy => {
        return (
            <ReservationCard 
                key={resy.id}
                id={resy.id}
                name={resy.name}
                date={resy.date}
                time={resy.time}
                number={resy.number}
                cancelReservation={props.cancelReservation}
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