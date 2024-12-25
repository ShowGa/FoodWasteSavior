import React from "react";
// react-icons
import { FaUserCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const buttonIconsInfo = [
  // { icon: <RiCompassDiscoverLine />, link: "/discover" },
  { icon: <RiSearchLine />, link: "/search" },
  { icon: <FaShoppingCart />, link: "/orders" },
  { icon: <FaHeart />, link: "/favorite" },
  { icon: <FaUserCircle />, link: "/profile" },
];

const MobileFooterNav = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-white z-30 border-t-2">
      <div className="flex justify-evenly items-center py-3">
        {buttonIconsInfo.map((iconInfo, index) => (
          <Link className="c-header2-nav_item" to={iconInfo.link}>
            {iconInfo.icon}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default MobileFooterNav;
