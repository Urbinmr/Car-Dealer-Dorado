import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DeleteFromCart from "./DeleteFromCart";
import { UserContext, CarContext } from "../App";
import CartItems from "./CartItems";
import Cart from "./Cart";

const cars = [
  {
    id: "1",
    make: "Porsche",
    model: "Cayman",
    year: 2016,
    image: "https://via.placeholder.com/200",
    color: "Red",
    price: "330.85",
    available: true
  }
]

// jest.mock("./DeleteFromCart", () => {
//   return function MockDeleteFromCart(props) {
//     return <div data-testid="deleteButton"></div>;
//   };
// });

describe("DeleteFromCart", () => {
    const mockSetUser = jest.fn()

  it("should display delete button", () => {
    render(
        <CarContext.Provider value={{cars}}>
          <UserContext.Provider value={{user: {name:"Jones", isLoggedIn:true, cart:["1"]}, setUser: mockSetUser}}>
            <Cart />
          </UserContext.Provider>
        </CarContext.Provider>
    );

    const deleteButton = screen.getAllByTestId("deleteButton");
    expect(deleteButton.length).toBe(1);
  });

//   it("should remove one cart item", () => {
//     render(
//         <CarContext.Provider value={{cars}}>
//           <UserContext.Provider value={{user: {name:"Jones", isLoggedIn:true, cart:["1"]}, setUser: mockSetUser}}>
//             <Cart />
//           </UserContext.Provider>
//         </CarContext.Provider>
//     );

//     let deleteButton = screen.getByTestId("deleteButton");
//     // console.log(deleteButton);
//     userEvent.click(deleteButton);
//     deleteButton = screen.queryByTestId("deleteButton")
//     expect(screen.queryByTestId("deleteButton")).toBeNull()
//   });
});