import React from 'react'
import ReservationForm from './ReservationForm'
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('ReservationForm', () => {
    let makeReservation
    let nameInput
    let dateInput
    let timeInput
    let numberInput
    let submitBtn

    beforeEach(() => {
        makeReservation = jest.fn()
        render(
            <ReservationForm 
                makeReservation={makeReservation}
            />
        )
        nameInput = screen.getByPlaceholderText("Name")
        dateInput = screen.getByPlaceholderText("Date")
        timeInput = screen.getByPlaceholderText("Time")
        numberInput = screen.getByPlaceholderText("Number of Guests")
        submitBtn = screen.getByText("Make Reservation")
    })

    it('should have 4 inputs and a button', () => {
        expect(nameInput).toBeInTheDocument()
        expect(dateInput).toBeInTheDocument()
        expect(timeInput).toBeInTheDocument()
        expect(numberInput).toBeInTheDocument()
        expect(submitBtn).toBeInTheDocument()
    })

    it('should call the make reservation function with a complete object', () => {
        Date.now = jest.fn().mockImplementation(() => 666)
        userEvent.type(nameInput, "Remus Lupin")
        userEvent.type(dateInput, "10/31")
        userEvent.type(timeInput, "6:30")
        userEvent.type(numberInput, "1")
        
        userEvent.click(submitBtn)

        expect(makeReservation).toHaveBeenCalledWith({
            id: 666,
            name: "Remus Lupin",
            date: "10/31",
            time: "6:30",
            number: 1
        })
    })
})