import {CarContext} from "../App"
import {useContext} from "react"
import VehicleDetail from "./VehicleDetail"

function VehicleList(props) {
  const cars = useContext(CarContext)

  const carItems = cars.map((car) =>
    <VehicleDetail value={car} />
  );

  return (
    <div className="car-list" aria-label="cars">
      {carItems}
    </div>
  );
}

export default VehicleList;
