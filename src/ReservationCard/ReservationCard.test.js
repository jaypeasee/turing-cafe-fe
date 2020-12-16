import React from 'react'
import ReservationCard from './ReservationCard'
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'

describe('ReservationForm', () => {
    it('should have an id, name, date, time, number, and cancel button', () => {
        render(
            <ReservationCard
                id={3}
                name="Ron Weasley"
                date="12/25"
                time="10:00"
                number={7}
            />
        )
        
        expect(screen.getByTestId("3")).toBeInTheDocument()
        expect(screen.getByText("Ron Weasley")).toBeInTheDocument()
        expect(screen.getByText("12/25")).toBeInTheDocument()
        expect(screen.getByText("10:00")).toBeInTheDocument()
        expect(screen.getByText(7)).toBeInTheDocument()
        expect(screen.getByText("Cancel")).toBeInTheDocument()
    })
})