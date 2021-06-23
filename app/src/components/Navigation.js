import {UserContext} from "../App"
import {useContext} from "react"
import {Link} from "react-router-dom"
import {Button} from "@material-ui/core"

function Navigation(props) {
  const {user, setUser} = useContext(UserContext)

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/messages">Messages</Link>
      {!user.isLoggedIn && <Link to="/login">Login</Link>}
      {user.isLoggedIn && <Button variant="contained" color="primary" onClick={() => setUser({name:'', isLoggedIn:false})}>Log Out</Button>}
    </nav>
  );
}

export default Navigation;
