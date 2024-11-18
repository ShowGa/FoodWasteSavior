import React from "react";
// components
import Header from "../components/Header";
// react router
import { Outlet } from "react-router-dom";

const Layouts = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layouts;
