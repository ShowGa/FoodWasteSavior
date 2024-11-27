import React, { useState, useEffect } from "react";
// components
import Header2 from "../components/Header2";
import MobileFooterNav from "../components/MobileFooterNav";

// react-router-dom
import { Outlet } from "react-router-dom";

const Layouts2 = () => {
  // check isMobile
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // ===================== //
  //    Helper Function    //
  // ===================== //
  const handleWindowSizeChange = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <>
      <Header2 />
      <Outlet />
      {!isMobile && <MobileFooterNav />}
    </>
  );
};

export default Layouts2;
