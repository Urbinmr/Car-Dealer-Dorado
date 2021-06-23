import { UserContext } from "../App";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";

function Navigation(props) {
  const { user, setUser } = useContext(UserContext);

  return (
    <nav>
      <NavLink to="/" exact={true}>
        Home
      </NavLink>
      <NavLink to="/cart">Cart</NavLink>
      <NavLink to="/messages">Messages</NavLink>
      {!user.isLoggedIn && <NavLink to="/login">Login</NavLink>}
      {user.isLoggedIn && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => setUser({ name: "", isLoggedIn: false })}
        >
          Log Out
        </Button>
      )}
    </nav>
  );
}

export default Navigation;
