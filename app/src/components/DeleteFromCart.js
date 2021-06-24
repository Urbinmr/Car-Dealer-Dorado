import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { UserContext } from "../App";

function DeleteFromCart(props) {
  const { user, setUser } = useContext(UserContext);

  const { id } = props;

  return (
    <Button
      onClick={(e) => {
        setUser({ ...user, cart: [...user.cart.filter((c) => c !== id)] });
      }}
      variant="contained"
      color="primary"
      height="100%"
      data-testid="deleteButton"
    >
      Delete
    </Button>
  );
}

export default DeleteFromCart;
