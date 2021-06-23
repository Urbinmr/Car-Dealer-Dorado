import { CarContext, FilterContext } from "../App";
import { useContext, useEffect, useState } from "react";
import VehicleDetail from "./VehicleDetail";

function VehicleList(props) {
  const { cars } = useContext(CarContext);
  const { filters } = useContext(FilterContext);
  const [visibleCars, setVisibleCars] = useState(cars);

  useEffect(() => {
    let tempCars = cars.filter((car) => car.available);

    tempCars = tempCars.filter(
      (car) => car.make === filters.make || filters.make === "all"
    );
    tempCars = tempCars.filter(
      (car) => car.model === filters.model || filters.model === "all"
    );
    tempCars = tempCars.filter(
      (car) => car.year === filters.year || filters.year === null
    );
    setVisibleCars(tempCars);
  }, [filters, cars]);

  let carItems = visibleCars.map((car) => {
    return <VehicleDetail value={car} type="list" />;
  });

  return (
    <div className="car-list" aria-label="cars">
      {carItems}
    </div>
  );
}

export default VehicleList;
