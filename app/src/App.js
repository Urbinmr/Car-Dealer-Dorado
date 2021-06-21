import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import VehicleList from "./components/VehicleList";
import VehicleDetail from "./components/VehicleDetail";
import VehicleSearchForm from "./components/VehicleSearchForm";
import Login from "./components/Login";
import Footer from "./components/Footer";

const Routes = (
  <Switch>
    <Route component={VehicleList} path="/list"></Route>
    <Route component={Login} path="/login"></Route>
    <Route component={VehicleDetail} path="/detail/:id"></Route>
    <Route component={VehicleSearchForm} path="/"></Route>
  </Switch>
);

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      {Routes}
      <Footer />
    </div>
  );
}

export default App;
