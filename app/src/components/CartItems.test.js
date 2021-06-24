import { render, screen } from "@testing-library/react";
import CartItems from "./CartItems";

jest.mock("./DeleteFromCart", () => {
  return function MockDeleteFromCart(props) {
    return <div data-testid="deleteFromCart"></div>;
  };
});

describe("CartItems", () => {
  it("should render empty cart", () => {
    render(<CartItems cartItems={[]} />);

    const emptyCart = screen.getByTestId("emptyCart");
    expect(emptyCart).toBeInTheDocument();
  });

  it("should render 100 cart items", () => {
    let cartItemsList = [];
    for(var i = 0; i < 100; i++) {
      cartItemsList.push({ id: i, image:"http://images.com", make:"", model:"", year:"", color:"", price:"" })
    }
    render(<CartItems cartItems={cartItemsList} type="cart" />);

    const emptyCart = screen.getAllByTestId("deleteFromCart");
    expect(emptyCart.length).toBe(100);
  });
});
