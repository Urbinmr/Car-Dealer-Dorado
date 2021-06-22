import {UserContext} from "../App"
import {useContext, useEffect} from "react"
import {Link} from "react-router-dom"

function Navigation(props) {
  const userContext = useContext(UserContext)

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/list">Inventory</Link>
      {!userContext.user.isLoggedIn && <Link to="/login">Login</Link>}
      {JSON.stringify(userContext)}
    </nav>
  );
}

export default Navigation;
