import {FormControl, InputLabel, Select, MenuItem} from "@material-ui/core"
import {useContext} from "react"
import {FilterContext, CarContext} from "../App"
import { makeStyles } from "@material-ui/core/styles"
import {Link} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function VehicleSearchForm(props) {
  const classes = useStyles();
  const {filters, setFilters} = useContext(FilterContext)
  const { cars } = useContext(CarContext)

  const handleSelectMake = (e) => {
    setFilters({...filters, make: e.target.value})
  }

  const handleSelectModel = (e) => {
    setFilters({...filters, model: e.target.value})
  }

  const handleSelectYear = (e) => {
    setFilters({...filters, year: e.target.value})
  }

  const makeOptions = [...new Set(cars.map(car => car.make))]
  const makeMenuItems = makeOptions.map(makeOption => {
    return <MenuItem key={makeOption} value={makeOption}>{makeOption}</MenuItem>
  })

  const modelOptions = [...new Set(cars.map(car => car.model))]
  const modelMenuItems = modelOptions.map(modelOption => {
    return <MenuItem key={modelOption} value={modelOption}>{modelOption}</MenuItem>
  })

  const yearOptions = [...new Set(cars.map(car => car.year))]
  const yearMenuItems = yearOptions.map(yearOption => {
    return <MenuItem key={yearOption} value={yearOption}> {yearOption}</MenuItem>
  })

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="make-input-label">Make</InputLabel>
        <Select
          id="select-make"
          labelId="make-input-label"
          value={filters.make}
          onChange={handleSelectMake}
        >
          {makeMenuItems}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="model-input-label">Model</InputLabel>
        <Select
          id="select-model"
          labelId="model-input-label"
          value={filters.model}
          onChange={handleSelectModel}
        >
          {modelMenuItems}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="year-input-label">Year</InputLabel>
        <Select
          id="select-year"
          labelId="year-input-label"
          value={filters.year}
          onChange={handleSelectYear}
        >
          {yearMenuItems}
        </Select>
      </FormControl>
      <Link to="/list">Search</Link>
    </div>
  )
}

export default VehicleSearchForm
