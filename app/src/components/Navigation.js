import {UserContext} from "../App"
import {useContext, useEffect} from "react"
import {Link} from "@material-ui/core"

function Navigation(props) {
  const userContext = useContext(UserContext)

  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/list">Inventory</Link>
      {!userContext.user.isLoggedIn && <Link href="/login">Login</Link>}
      {JSON.stringify(userContext)}
    </nav>
  );
}

export default Navigation;
