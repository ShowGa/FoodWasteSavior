import React from "react";
// router
import { Link } from "react-router-dom";
// image
import { img1 } from "../assets";
// icons
import { FaCircleCheck } from "react-icons/fa6";

const OrderHistoryListCard = ({ order }) => {
  return (
    <Link to={`/order-history/${order.orderId}`} className="c-order-list-card">
      <div className="flex justify-start items-center gap-4">
        <div className="rounded-full border-2 border-gray-300 w-[3rem] h-[3rem] relative">
          <img
            src={order.storeLogoImageUrl}
            alt=""
            className="rounded-full w-full h-full object-cover"
          />

          <div className="absolute bottom-0 right-0 bg-white rounded-full">
            <FaCircleCheck className="text-green-600 text-xl" />
          </div>
        </div>

        <div>
          <h3 className="text-xl">{order.storeName}</h3>
          <p className="text-xs text-yellow-500">{order.orderDate}</p>
        </div>
      </div>
    </Link>
  );
};

export default OrderHistoryListCard;
