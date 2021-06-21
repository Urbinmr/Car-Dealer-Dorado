import { render, screen } from "@testing-library/react";
import VehicleList from "./VehicleList";


describe("VehicleList", () => {
  beforeEach(() => {
    render(<VehicleList />);
  });

it("should render car inventory list", () => {
      const listElement = screen.getByRole("list", { name: /cars/i });
      expect(listElement).toBeInTheDocument();
})})