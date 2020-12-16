import React from 'react';
import App from './App';
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe("App", () => {
  it('should have a new reservation show on the page after creating one in the form', () => {
    render(<App />)

    const nameInput = screen.getByPlaceholderText("Name")
    const dateInput = screen.getByPlaceholderText("Date")
    const timeInput = screen.getByPlaceholderText("Time")
    const numberInput = screen.getByPlaceholderText("Number of Guests")
    const submitBtn = screen.getByText("Make Reservation")

    Date.now = jest.fn().mockImplementation(() => 666)
    userEvent.type(nameInput, "Remus Lupin")
    userEvent.type(dateInput, "10/31")
    userEvent.type(timeInput, "6:30")
    userEvent.type(numberInput, "1")
        
    userEvent.click(submitBtn)

    expect(screen.getByTestId("666")).toBeInTheDocument()
    expect(screen.getByText("Remus Lupin")).toBeInTheDocument()

  })
})