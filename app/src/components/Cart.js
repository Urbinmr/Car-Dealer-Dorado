import React, { useContext } from "react";
import { UserContext, CarContext } from "../App";
import CartItems from "./CartItems";

function Cart(props) {
  const { user } = useContext(UserContext);
  const { cars } = useContext(CarContext);

  const carsInCart = cars.filter((car) => user.cart.includes(car.id));

  return <CartItems cartItems={carsInCart} />;
}

export default Cart;
