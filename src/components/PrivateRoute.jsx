import React from "react";
// react router dom
import { Outlet, Navigate } from "react-router-dom";
// zustand
import useAuthUserStore from "../zustand/useAuthUser";

const PrivateRoute = () => {
  // zustand later
  const { authUser } = useAuthUserStore();

  return authUser ? <Outlet /> : <Navigate to="/user-login" />;
};

export default PrivateRoute;
