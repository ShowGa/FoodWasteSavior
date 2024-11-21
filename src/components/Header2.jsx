import React, { useRef, useEffect } from "react";
// css
import "./css/componentsCSS.css";
// react icons
import { HiShoppingBag } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa6";
import { AiOutlineControl } from "react-icons/ai";

// zustand
import { useHeaderHeightStore } from "../zustand/mapUXMechanismStore";

const Header2 = () => {
  // zustand
  const { setHeader2Height } = useHeaderHeightStore();

  // useRef
  const headerRef = useRef(null);

  // ===================== //
  //   helper functions
  // ===================== //

  const updateHeaderHeight = () => {
    if (headerRef.current) {
      setHeader2Height(headerRef.current.offsetHeight);
    }
  };

  useEffect(() => {
    // update the header height when the component is mounted
    updateHeaderHeight();

    // update the header height when the window is resized
    window.addEventListener("resize", updateHeaderHeight);

    // clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  return (
    <header className="c-header2 bg-white" ref={headerRef}>
      {/* top */}
      <div className="flex flex-row items-center justify-between px-10 max-lg:px-8 border-b">
        <div className="text-4xl py-4">
          <HiShoppingBag />
        </div>

        <div className="flex flex-row items-center gap-4">
          <div className="c-header2-nav_item">
            <RiCompassDiscoverLine />
          </div>
          <div className="c-header2-nav_item">
            <FaHeart />
          </div>
          <div className="c-header2-nav_item">
            <FaUserCircle />
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="mx-auto p-4 border-b">
        <div className="flex justify-center items-center space-x-4">
          {/* Search */}
          <div className="c-search-bar">
            <input
              type="text"
              placeholder="Search..."
              className="c-search_input"
            />
          </div>

          {/* Filter */}
          <div className="c-filter-options">
            <AiOutlineControl className="text-3xl" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header2;

/*
============= Create later ==============
1. Filter tab
2. Map


============= Adjust later ==============
1.

*/
