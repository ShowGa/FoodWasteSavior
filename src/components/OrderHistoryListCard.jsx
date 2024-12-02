import React from "react";
// image
import { img1 } from "../assets";
// icons
import { FaCircleCheck } from "react-icons/fa6";

const OrderHistoryListCard = () => {
  return (
    <div className="c-order-list-card">
      <div className="flex justify-start items-center gap-4">
        <div className="rounded-full border-2 border-gray-300 w-[3rem] h-[3rem] relative">
          <img
            src={img1}
            alt=""
            className="rounded-full w-full h-full object-cover"
          />

          <div className="absolute bottom-0 right-0 bg-white rounded-full">
            <FaCircleCheck className="text-green-600 text-xl" />
          </div>
        </div>

        <div>
          <h3 className="text-xl">Super Holly Bag</h3>
          <p className="text-xs font-light text-yellow-500">pick up time</p>
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryListCard;
