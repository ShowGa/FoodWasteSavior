import React, { useState } from "react";
// react router dom
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  // zustand later
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? <Outlet /> : <Navigate to="/user-login" />;
};

export default PrivateRoute;
