import {CarContext} from "../App"
import {useContext} from "react"

function VehicleList(props) {
  const cars = useContext(CarContext)
  return (
    <ul className="car-list" aria-label="cars">
      <li>Our First Car!</li>
    </ul>
  );
}

export default VehicleList;
