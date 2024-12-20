import React from "react";
// react router dom
import { Link } from "react-router-dom";
// img
import { img1 } from "../assets";

const OrderListCard = ({ order }) => {
  return (
    <Link to={`/order/${order.orderId}`} className="c-order-list-card">
      <div className="rounded-full border border-black absolute top-0 left-0 bg-white px-2 translate-y-[-50%]">
        <span>{order.orderStatus}</span>
      </div>

      <div className="flex justify-start items-center gap-4">
        <div className="rounded-full border-2 border-gray-300 w-[3rem] h-[3rem]">
          <img
            src={order.storeLogoImageUrl}
            alt=""
            className="rounded-full w-full h-full object-cover"
          />
        </div>

        <div>
          <h3 className="text-xl">{order.storeName}</h3>
          <p className="text-xs font-light">
            {order.pickupStartTime} - {order.pickupEndTime}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default OrderListCard;
