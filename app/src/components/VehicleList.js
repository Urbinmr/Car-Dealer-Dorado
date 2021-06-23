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
      (car) => car.make === filters.make || filters.make === "All"
    );
    tempCars = tempCars.filter(
      (car) => car.model === filters.model || filters.model === "All"
    );
    tempCars = tempCars.filter(
      (car) => car.year === filters.year || filters.year === "All"
    );
    setVisibleCars(tempCars);
  }, [filters, cars]);

  let carItems = visibleCars.map((car) => {
    return <VehicleDetail key={car.id} value={car} type="list" />;
  });

  return (
    <div className="car-list" aria-label="cars">
      {carItems}
    </div>
  );
}

export default VehicleList;
