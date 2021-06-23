import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { UserContext } from "../App";

function AddToCart(props) {
  const { user, setUser } = useContext(UserContext);

  const { id } = props;

  return (
    <Button
      onClick={(e) => {
        console.log(id);
        setUser({ ...user, cart: [...user.cart, id] });
      }}
      variant="contained"
      color="primary"
      height="100%"
    >
      Buy
    </Button>
  );
}

export default AddToCart;
