const getAllReservations = () => {
    return fetch('http://localhost:3001/api/v1/reservations')
        .then(response => response.json())
}

const postNewReservation = (newReservation) => {
    return fetch('http://localhost:3001/api/v1/reservations')
    
}

export {getAllReservations, postNewReservation}