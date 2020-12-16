import React from 'react'
import ReservationForm from './ReservationForm'
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('ReservationForm', () => {
    let nameInput
    let dateInput
    let timeInput
    let numberInput
    let submitBtn

    beforeEach(() => {
        render(<ReservationForm />)
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
})