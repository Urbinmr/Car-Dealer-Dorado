import { CarContext, FilterContext } from "../App";
import { useContext } from "react";
import VehicleDetail from "./VehicleDetail";

function VehicleList(props) {
  const cars = useContext(CarContext);
  const filters = useContext(FilterContext);

  let carItems = cars.filter((car) => car.available);

  carItems = carItems.filter(
    (car) => car.make === filters.make || filters.make === "all"
  );
  carItems = carItems.filter(
    (car) => car.model === filters.model || filters.model === "all"
  );
  carItems = carItems.filter(
    (car) => car.year === filters.year || filters.year === null
  );

  carItems = carItems.map((car) => {
    return <VehicleDetail value={car} />;
  });

  return (
    <div className="car-list" aria-label="cars">
      {carItems}
    </div>
  );
}

export default VehicleList;
