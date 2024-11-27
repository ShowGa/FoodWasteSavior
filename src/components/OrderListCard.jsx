import React from "react";
// img
import { img1 } from "../assets";

const OrderListCard = ({ prop }) => {
  return (
    <div className="c-order-list-card">
      <div className="rounded-full border border-black absolute top-0 left-0 bg-white px-2 translate-y-[-50%]">
        <span>Pending Collection</span>
      </div>

      <div className="flex justify-start items-center gap-4">
        <div className="rounded-full border-2 border-gray-300 w-[3rem] h-[3rem]">
          <img
            src={img1}
            alt=""
            className="rounded-full w-full h-full object-cover"
          />
        </div>

        <div>
          <h3 className="text-xl">Super Bag</h3>
          <p className="text-xs font-light">
            11月27日 10:00 AM - 11月27日 11:00 AM
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderListCard;
