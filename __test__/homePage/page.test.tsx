import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from "@/components/app/page"

describe('Page', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading).toBeInTheDocument()
  })
})