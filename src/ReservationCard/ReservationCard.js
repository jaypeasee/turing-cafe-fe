import React from 'react'
import './ReservationCard.css'

const ReservationCard = (props) => {
    const {id, name, date, time, number} = props
    return (
        <section
            className='resy-card'
            data-testid={id}
        >
            <h2>{name}</h2>
            <p>{date}</p>
            <p>{time}</p>
            <p>{number}</p>
            <button>Cancel</button>
        </section>
    )
}

export default ReservationCard