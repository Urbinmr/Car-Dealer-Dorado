import { Link } from "react-router-dom";

function Navigation(props) {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/list">Inventory</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navigation;
