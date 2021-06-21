import { Link } from "react-router-dom";

function Navigation(props) {
  return (
    <nav>
      <a href="/">Home</a>
      <a href="/list">Inventory</a>
      <a href="/login">Login</a>
    </nav>
  );
}

export default Navigation;
