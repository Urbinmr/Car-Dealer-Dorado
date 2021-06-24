import {CarContext, FilterContext} from "../App"
import {useContext, useEffect, useState, useCallback} from "react"
import VehicleDetail from "./VehicleDetail"
import {FixedSizeList} from 'react-window'

function VehicleList(props) {
  const {cars} = useContext(CarContext)
  const {filters} = useContext(FilterContext)
  const [visibleCars, setVisibleCars] = useState(cars)

  useEffect(() => {
    let tempCars = cars.filter((car) => car.available)

    tempCars = tempCars.filter(
      (car) => car.make === filters.make || filters.make === "All"
    )
    tempCars = tempCars.filter(
      (car) => car.model === filters.model || filters.model === "All"
    )
    tempCars = tempCars.filter(
      (car) => car.year === filters.year || filters.year === "All"
    )
    setVisibleCars(tempCars)
  }, [filters, cars])

  // let carItems = visibleCars.map((car) => {
  //   return <VehicleDetail key={car.id} value={car} type="list"/>
  // })

  const Row = useCallback(({index, style}) => {
    const vehicle = visibleCars[index]
    return (
      <div style={style}>
        <VehicleDetail key={vehicle.id} value={vehicle} type="list" {...vehicle} />
      </div>
    )
  }, [visibleCars])

  return (
    <div className="car-list" aria-label="cars">
      <FixedSizeList
        height={window.innerHeight - 100}
        width={window.innerWidth - 50}
        itemSize={250}
        itemCount={visibleCars.length}
      >
        {Row}
      </FixedSizeList>
    </div>
  )
}

export default VehicleList
