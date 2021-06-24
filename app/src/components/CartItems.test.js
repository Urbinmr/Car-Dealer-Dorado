import { render, screen } from "@testing-library/react";
import CartItems from "./CartItems";

jest.mock("./VehicleDetail", () => {
  return function MockVehicleDetail(props) {
    return <div data-testid="vehicleDetail"></div>;
  };
});

describe("CartItems", () => {
  it("should render empty cart", () => {
    render(<CartItems cartItems={[]} />);

    const emptyCart = screen.getByTestId("emptyCart");
    expect(emptyCart).toBeInTheDocument();
  });

  it("should render car contents", () => {
    render(<CartItems cartItems={[{ id: "" }]} />);

    const emptyCart = screen.getAllByTestId("vehicleDetail");
    expect(emptyCart.length).toBe(1);
  });
});
