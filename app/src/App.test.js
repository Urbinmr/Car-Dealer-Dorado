import {render, screen} from "@testing-library/react"
import App from "./App"
import {BrowserRouter} from "react-router-dom"
import React, {createContext} from "react"


describe("app", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    )
  })

  it("should render header", () => {
    const headerElement = screen.getByAltText(/dorado auto/i)
    expect(headerElement).toBeInTheDocument()
  })

  it("should render navigation with login", () => {
    const navHome = screen.getByText(/home/i)
    const navMessages = screen.getByText(/messages/i)
    const navLogin = screen.getByText(/login/i)

    expect(navMessages).toBeInTheDocument()
    expect(navHome).toBeInTheDocument()
    expect(navLogin).toBeInTheDocument()
  })

  it("should render car inventory list", () => {
    const listElement = screen.getByLabelText(/cars/i)
    expect(listElement).toBeInTheDocument()
  })

  it("should render car search form", () => {
    const searchFormMake = screen.getByText(/make/i)
    const searchFormModel = screen.getByText(/model/i)
    const searchFormYear = screen.getByText(/year/i)

    expect(searchFormMake).toBeInTheDocument()
    expect(searchFormModel).toBeInTheDocument()
    expect(searchFormYear).toBeInTheDocument()
  })
})
