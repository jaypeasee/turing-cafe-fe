import React from 'react'
import './ReservationCard.css'

const ReservationCard = (props) => {
    const {id, name, date, time, number, cancelReservation} = props
    return (
        <section
            className='resy-card'
            data-testid={id}
        >
            <h2>{name}</h2>
            <p>{date}</p>
            <p>{time}</p>
            <p>{number}</p>
            <button
                className="cancel-btn"
                onClick={() => cancelReservation(id)}
                data-testid={`cancel ${id}`}
            >Cancel</button>
        </section>
    )
}

export default ReservationCard