import React from "react";
// react icons
import { HiShoppingBag } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa6";
import { AiOutlineControl } from "react-icons/ai";

const Header2 = () => {
  // ===================== //
  //   helper functions
  // ===================== //

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

      {/* bottom */}
      <div className="mx-auto p-4 border-b">
        <div className="flex justify-center items-center space-x-4">
          {/* Search */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
          </div>

          {/* Filter */}
          <div className="filter-options">
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
