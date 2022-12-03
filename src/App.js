import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AddEmployee from "./components/AddEmployee";
import EmployeeDetails from "./components/EmployeeDetails";
import SignUpWithEmail from "./components/SignUpWithEmail";
import SearchResult from "./components/SearchResult";
import ForgotPassword from "./components/ForgotPassword";
import AddRecruit from "./components/AddRecruit";
import SendNotificationToRecruit from "./components/SendNotificationToRecruit";
import EmailSent from "./components/EmailSent";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Login />}></Route>
        <Route
          path="/forgotPassword"
          element={<ForgotPassword />}></Route>
        <Route
          path="/signUp"
          element={<SignUp />}></Route>
        <Route
          path="/emailVerification"
          element={<EmailSent />}></Route>
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
          path="/addRecruit"
          element={<AddRecruit />}></Route>
        <Route
          path="/addRecruit/send"
          element={<SendNotificationToRecruit />}></Route>
        <Route
          path="/employeeDetails"
          element={<EmployeeDetails />}></Route>
      </Routes>
    </Router>
  );
}

// (node:9732) [DEP_WEBPACK_DEV_SERVER_ON_AFTER_SETUP_MIDDLEWARE] DeprecationWarning: 'onAfterSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.
// (Use `node --trace-deprecation ...` to show where the warning was created)
// (node:9732) [DEP_WEBPACK_DEV_SERVER_ON_BEFORE_SETUP_MIDDLEWARE] DeprecationWarning: 'onBeforeSetupMiddleware' option is deprecated. Please
// use the 'setupMiddlewares' option.
