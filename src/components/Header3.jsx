import React from "react";
// css
import "./css/componentsCSS.css";
// react icons
import { HiShoppingBag } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa6";

const Header3 = () => {
  return (
    <header className="c-header2 bg-white">
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
    </header>
  );
};

export default Header3;

/*

============= Notes ===========
1. Using c-header2 class name because I am too

*/
