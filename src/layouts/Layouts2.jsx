import React, { useState, useEffect } from "react";
// react router dom
import { useNavigate } from "react-router-dom";
// components
import Header2 from "../components/Header2";
import MobileFooterNav from "../components/MobileFooterNav";
// react-router-dom
import { Outlet } from "react-router-dom";
// zustand
import useAuthUserStore from "../zustand/useAuthUser";

const Layouts2 = () => {
  // react router dom
  const navigate = useNavigate();

  // check isMobile
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // zustand
  const { authUser } = useAuthUserStore();

  // ===================== //
  //    Helper Function    //
  // ===================== //
  const handleWindowSizeChange = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    // windowsize listener
    window.addEventListener("resize", handleWindowSizeChange);

    // check if authUser is null
    if (authUser === null) {
      navigate("/user-login");
    }

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <>
      <Header2 isMobile={isMobile} />
      <Outlet />
      <div className="hidden max-md:block h-[5rem]"></div>
      {isMobile && <MobileFooterNav className="z-30" />}
    </>
  );
};

export default Layouts2;
