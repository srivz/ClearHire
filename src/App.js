import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AddEmployee from "./components/AddEmployee";
import EmployeeDetails from "./components/EmployeeDetails";
import SignUpWithEmail from "./components/SignUpWithEmail";
import SearchResult from "./components/SearchResult";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Login />}></Route>
          <Route
            path="/signUp"
            element={<SignUp />}></Route>
          <Route
            path="/signUp/email"
            element={<SignUpWithEmail />}></Route>
          <Route
            path="/searchResults"
            element={<SearchResult />}></Route>
          <Route
            path="/addEmployee"
            element={<AddEmployee />}></Route>
          <Route
            path="/employeeDetails"
            element={<EmployeeDetails />}></Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
