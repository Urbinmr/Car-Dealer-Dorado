import { Link } from "react-router-dom";
import {UserContext} from "../App"
import {useContext, useEffect} from "react"

function Navigation(props) {
  const userContext = useContext(UserContext)

  return (
    <nav>
      <a href="/">Home</a>
      <a href="/list">Inventory</a>
      {!userContext.user.isLoggedIn && <a href="/login">Login</a>}
      {JSON.stringify(userContext)}
    </nav>
  );
}

export default Navigation;
