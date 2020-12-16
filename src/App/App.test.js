import React from 'react';
import App from './App';
import '@testing-library/jest-dom'
import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {getAllReservations} from '../apiCalls'
jest.mock('../apiCalls')

describe("App", () => {
  let mockReservations
  let nameInput
  let dateInput
  let timeInput
  let numberInput
  let submitBtn

  beforeEach(() => {
    mockReservations = [
      {
        id: 1,
        name: 'Christie',
        date: '12/29',
        time: '7:00',
        number: 12,
      },
      {
        id: 2,
        name: 'Leta',
        date: '4/5',
        time: '7:00',
        number: 2,
      },
      {
        id: 3,
        name: 'Pam',
        date: '1/21',
        time: '6:00',
        number: 4,
      }
    ]
    getAllReservations.mockResolvedValueOnce(mockReservations)
    render(<App />)
    Date.now = jest.fn().mockImplementation(() => 666)
    nameInput = screen.getByPlaceholderText("Name")
    dateInput = screen.getByPlaceholderText("Date")
    timeInput = screen.getByPlaceholderText("Time")
    numberInput = screen.getByPlaceholderText("Number of Guests")
    submitBtn = screen.getByText("Make Reservation")
  })

  it('should load pre-existing reservations when the component renders', async () => {
    const christie = await waitFor(() => screen.getByText("Christie"))
    const leta = await waitFor(() => screen.getByText("Leta"))
    const pam = await waitFor(() => screen.getByText("Pam"))

    expect(christie).toBeInTheDocument()
    expect(leta).toBeInTheDocument()
    expect(pam).toBeInTheDocument()
  })

  it('should have a new reservation show on the page after creating one in the form', () => {
    userEvent.type(nameInput, "Remus Lupin")
    userEvent.type(dateInput, "10/31")
    userEvent.type(timeInput, "6:30")
    userEvent.type(numberInput, "1")
        
    userEvent.click(submitBtn)

    expect(screen.getByText("Remus Lupin")).toBeInTheDocument()
  })

  it('should be able to cancel reservations', async () => {
    const christie = await waitFor(() => screen.getByText("Christie"))
    const christieCancelBtn = await waitFor(() => screen.getByTestId("cancel 1"))

    expect(christie).toBeInTheDocument()

    userEvent.click(christieCancelBtn)

    expect(christie).not.toBeInTheDocument()
  })
})