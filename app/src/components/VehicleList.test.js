import {render, screen} from "@testing-library/react"
import VehicleList from "./VehicleList"
import VehicleSearchForm from "./VehicleSearchForm"
import {createContext} from "react"
import {CarContext, FilterContext, UserContext} from "../App"

const mockCars = [
  {
    id: "480f26fa-8e0e-4a13-ae3c-f2a44bd1995e",
    make: "Porsche",
    model: "Cayman",
    year: 2016,
    image: "https://via.placeholder.com/200",
    color: "Red",
    price: "330.85",
    available: true
  },
  {
    id: "480f26fa-8e0e-4a13-ae3c-f2a44bd1998e",
    make: "Porsche",
    model: "Cayman",
    year: 2016,
    image: "https://via.placeholder.com/200",
    color: "Red",
    price: "330.85",
    available: true
  }
]
const baseFilters = {
  make: "All",
  model: "All",
  year: "All",
}

describe("VehicleList", () => {
  const renderVehicleList = (cars, filters) => {
    const mockSetUser = jest.fn()
    const rendered = render(
      <CarContext.Provider value={{cars}}>
        <FilterContext.Provider value={{filters}}>
          <UserContext.Provider value={{user: null, setUser: mockSetUser}}>
            <VehicleList/>
          </UserContext.Provider>
        </FilterContext.Provider>
      </CarContext.Provider>
    )
    return {...rendered}
  }

  it("should render car inventory list", () => {
    renderVehicleList(mockCars, baseFilters)
    const listElement = screen.getAllByTitle(/car/i)
    expect(listElement.length).toBe(mockCars.length)
  })
})
