import Contact from "../Contact";
import {render} from "@testing-library/react";
import { screen, configure } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Contact Page Tests', () => {

    it('check component loads or not',() => {
        render(<Contact/>)
        const heading = screen.getByRole("heading")
        expect(heading).toBeInTheDocument()
    })

    it('check button in component or not',() => {
        render(<Contact/>)
        const button = screen.getByRole("button")
        expect(button).toBeInTheDocument()
    })

    it('check input in component or not',() => {
        render(<Contact/>)
        const input = screen.getByPlaceholderText("name")
        expect(input).toBeInTheDocument()
    })

    it('should load 2 input boxes',() => {
        render(<Contact/>)
        const input = screen.getAllByRole("textbox")
        expect(input.length).toBe(2)
    }) 
})