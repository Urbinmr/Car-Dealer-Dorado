import { Switch, Route } from "react-router-dom";
import { createContext, useState, useEffect } from "react";

import "./App.css";
import Header from "./components/Header";
import SendMessages from "./components/SendMessages";
import ReadMessages from "./components/ReadMessages";
import Cart from "./components/Cart";
import VehicleDetail from "./components/VehicleDetail";
import Login from "./components/Login";
import Footer from "./components/Footer";
import axios from "axios";
import Home from "./components/Home";

const Routes = (
  <Switch>
    <Route component={Cart} path="/cart"></Route>
    <Route component={SendMessages} path="/messages/:carId"></Route>
    <Route component={ReadMessages} path="/messages"></Route>
    <Route component={Login} path="/login"></Route>
    <Route component={VehicleDetail} path="/detail/:id"></Route>
    <Route component={Home} path="/"></Route>
  </Switch>
);

export const CarContext = createContext(null);
export const FilterContext = createContext(null);
export const UserContext = createContext({
  name: "DefaultUser",
  isLoggedIn: false,
});
export const MessagingContext = createContext(null);

function App() {
  const [cars, setCars] = useState([]);
  const [user, setUser] = useState({
    name: "DefaultUser",
    isLoggedIn: false,
    conversations: [],
  });
  const [filters, setFilters] = useState({
    make: "all",
    model: "all",
    year: null,
  });
  const [messages, setMessages] = useState(new Map());

  useEffect(() => {
    setUser({ name: "DefaultUser", isLoggedIn: false });

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
        <MessagingContext.Provider value={{ messages, setMessages }}>
          <FilterContext.Provider value={{ filters, setFilters }}>
            <CarContext.Provider value={{ cars, setCars }}>
              {Routes}
            </CarContext.Provider>
          </FilterContext.Provider>
        </MessagingContext.Provider>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
