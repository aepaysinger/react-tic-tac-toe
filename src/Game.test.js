import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom';
import Game from "./Game"
import React from "react"

test("game works", () => {
  render(<Game />)
  const linkElement = screen.getByText("Loading")
  expect(linkElement).toBeInTheDocument()
})
