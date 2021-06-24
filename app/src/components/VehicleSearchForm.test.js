import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import VehicleSearchForm from "./VehicleSearchForm";
import { CarContext, FilterContext, UserContext } from "../App";

const mockCars = [
  {
    id: "480f26fa-8e0e-4a13-ae3c-f2a44bd1995e",
    make: "Porsche",
    model: "Cayman",
    year: 2016,
    image: "https://via.placeholder.com/200",
    color: "Red",
    price: "330.85",
    available: true,
  },
  {
    id: "480f26fa-8e0e-4a13-ae3c-f2a44bd1998e",
    make: "Porsche",
    model: "Cayman",
    year: 2016,
    image: "https://via.placeholder.com/200",
    color: "Red",
    price: "330.85",
    available: true,
  },
];

const baseFilters = {
  make: "All",
  model: "All",
  year: "All",
};

describe("VehicleSearchForm", () => {
  const renderVehicleSearchForm = (mockCars, baseFilters) => {
    const mockSetFilters = jest.fn();
    const rendered = render(
      <CarContext.Provider value={{ cars: mockCars }}>
        <FilterContext.Provider
          value={{ filters: baseFilters, setFilters: mockSetFilters }}
        >
          <VehicleSearchForm />
        </FilterContext.Provider>
      </CarContext.Provider>
    );
    return { ...rendered };
  };

  it("Should render filter options", async () => {
    renderVehicleSearchForm(mockCars, baseFilters);

    expect(screen.getAllByDisplayValue("All")).toHaveLength(3);

    fireEvent.click(screen.getByTestId("select-year"));

    await waitFor(() => expect(screen.getByText(2016)).toBeInTheDocument());

    fireEvent.click(screen.getByText(2016));

    expect(screen.getByText(2016)).toBeInTheDocument();
  });
});
