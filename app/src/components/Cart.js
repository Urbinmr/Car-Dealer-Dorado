import React, { useState, useContext } from "react";
import { UserContext, CarContext } from "../App";
import VehicleDetail from "./VehicleDetail";

function Cart(props) {
  const { user } = useContext(UserContext);
  const { cars } = useContext(CarContext);

  const carsInCart = cars.filter((car) => user.cart.includes(car.id));

  return (
    <div>
      {carsInCart.length === 0 && <div>Nothing in your cart</div>}
      {carsInCart.map((car) => (
        <VehicleDetail value={car} type="cart"></VehicleDetail>
      ))}
    </div>
  );
}

export default Cart;
