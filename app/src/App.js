import { Switch, Route } from "react-router-dom";
import { createContext, useState, useEffect } from "react";

import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import VehicleList from "./components/VehicleList";
import VehicleDetail from "./components/VehicleDetail";
import VehicleSearchForm from "./components/VehicleSearchForm";
import Login from "./components/Login";
import Footer from "./components/Footer";
import axios from "axios";

const Routes = (
  <Switch>
    <Route component={VehicleList} path="/list"></Route>
    <Route component={Login} path="/login"></Route>
    <Route component={VehicleDetail} path="/detail/:id"></Route>
    <Route component={VehicleSearchForm} path="/"></Route>
  </Switch>
);

export const CarContext = createContext(null);
export const FilterContext = createContext(null);
export const UserContext = createContext({ name: "", isLoggedIn: false });

function App() {
  const [cars, setCars] = useState([]);
  const [user, setUser] = useState({ name: "DefaultUser", isLoggedIn: false });
  const [filters, setFilters] = useState({ make: "all", model: "all", year: null })

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:5000/api/vehicles");

      setCars(result.data);
    };

    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Header />
        <Navigation />
        <FilterContext.Provider
          value={{filters, setFilters}}
        >
          <CarContext.Provider value={{cars, setCars}}>{Routes}</CarContext.Provider>
        </FilterContext.Provider>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
