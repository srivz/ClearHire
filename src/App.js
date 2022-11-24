import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
import AddEmployee from "./components/AddEmployee";
import EmployeeDetails from "./components/EmployeeDetails";
import WelcomeSteps from "./components/WelcomeSteps";
import SearchResult from "./components/SearchResult";

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home />}></Route>
          <Route
            path="/welcome"
            element={<Welcome />}></Route>
          <Route
            path="/welcome-steps"
            element={<WelcomeSteps />}></Route>
          <Route
            path="/search-results"
            element={<SearchResult />}></Route>
          <Route
            path="/add-employee"
            element={<AddEmployee />}></Route>
          <Route
            path="/employee-details"
            element={<EmployeeDetails />}></Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
