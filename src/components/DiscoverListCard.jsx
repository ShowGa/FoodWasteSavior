import React from "react";
// img
import { img1, img2 } from "../assets";

const DiscoverListCard = () => {
  return (
    <div className="c-discover-list-card">
      <div className="w-full h-32 relative overflow-hidden">
        <img src={img1} alt="" className="c-discover-list-card_img" />

        <span className="absolute top-2 right-2 bg-secondaryTheme px-2 rounded-full">
          5 剩餘
        </span>

        <div className="absolute bottom-2 left-2 flex items-center gap-2">
          <div className="border-2 border-gray-300 rounded-full overflow-hidden">
            <img src={img2} alt="" className="w-10 h-10" />
          </div>

          <p className="text-xl text-white font-bold">John's Store</p>
        </div>
      </div>

      <div className="px-4 py-2">
        <div>
          <div>
            <h3 className="text-xl font-bold">Suprise Bag</h3>
            <p className="text-xs">Collect today : 10:00 AM - 11:00 AM</p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <p>★ 4.7</p>
            <p> | </p>
            <p>1.2 mi</p>
          </div>

          <p className="text-xl font-bold">NT$ 100</p>
        </div>
      </div>
    </div>
  );
};

export default DiscoverListCard;