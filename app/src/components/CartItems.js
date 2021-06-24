import React from "react";
import VehicleDetail from "./VehicleDetail";

function CartItems(props) {
  const { cartItems } = props;
  return (
    <div>
      {cartItems.length === 0 && (
        <div data-testid="emptyCart">Nothing in your cart</div>
      )}
      {cartItems.map((car) => (
        <VehicleDetail key={car.id} value={car} type="cart"></VehicleDetail>
      ))}
    </div>
  );
}

export default CartItems;
