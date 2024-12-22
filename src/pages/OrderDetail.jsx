import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
// icons
import { IoLocationOutline } from "react-icons/io5";
// service
import OrderService from "../service/OrderService";
// toast
import toast from "react-hot-toast";
// utils
import { formatTime, categoryName, orderStatus } from "../utils/convertor";
// tools
import { countdownTimer } from "../utils/tools";

const OrderDetail = () => {
  const { orderId } = useParams();

  const [countdown, setCountdown] = useState("00:00:00");
  const [isTimeUp, setIsTimeUp] = useState(false);

  const [orderDetail, setOrderDetail] = useState(null);

  const handleGetOrderDetail = () => {
    OrderService.getOrderDetail(orderId)
      .then((res) => {
        setOrderDetail(res.data.data);
      })
      .catch((err) => {
        const message =
          err.response?.data.message ||
          "糟糕!伺服器似乎出現了問題，請聯絡客服。";
        toast.error(message);
      });
  };

  useEffect(() => {
    handleGetOrderDetail();

    if (orderDetail) {
      countdownTimer(orderDetail?.pickupStartTime, setCountdown, setIsTimeUp);
    }
  }, [orderDetail]);

  return (
    <main>
      <div className="flex flex-col gap-4 items-center px-[4rem] py-[1.5rem]">
        <h1 className="text-4xl font-bold mb-4">訂單詳情</h1>

        {/* Store Information */}
        <div className="max-w-[30rem] w-full">
          <section className="flex flex-col justify-between items-center gap-4 py-[1.5rem] border border-gray-300 rounded-lg shadow-md">
            <div className="w-[5rem] h-[5rem]">
              <img
                src={orderDetail?.storeLogo}
                alt=""
                className="rounded-full object-cover"
              />
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold leading-none">
                {orderDetail?.storeName}
              </p>
              <span>{orderDetail?.storeAddress}</span>
            </div>
            <a
              href={`https://www.google.com/maps/search/${orderDetail?.storeAddress}`}
              target="_blank"
              className="flex items-center gap-2"
            >
              <span>尋找店家</span>
              <IoLocationOutline className="text-red-500" />
            </a>
          </section>

          {/* Order Information */}
          <section className="mt-4 py-[1rem] px-[1.75rem] border border-gray-300 rounded-lg shadow-md">
            <div className="flex flex-col gap-5">
              <div className="flex justify-between">
                <div>
                  <p className="font-bold text-gray-400">訂單日期</p>
                  <p className="text-xl">
                    {orderDetail?.orderDate &&
                      new Date(orderDetail.orderDate).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-400">取餐時間</p>
                  <p className="text-xl">
                    {orderDetail?.pickupStartTime &&
                      formatTime(orderDetail.pickupStartTime)}
                    {" - "}
                    {orderDetail?.pickupEndTime &&
                      formatTime(orderDetail.pickupEndTime)}
                  </p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <p className="font-bold text-gray-400">
                    {categoryName(orderDetail?.packageCategory)} x{" "}
                    {orderDetail?.orderQuantity}
                  </p>
                  <p className="text-xl">{orderDetail?.packageName}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-400">總價</p>
                  <p className="text-xl">${orderDetail?.orderTotalPrice}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-300 border-dashed my-4"></div>

            <div className="text-center mt-4">
              <button
                className={`px-4 py-2 rounded-full w-full font-bold  transition-all duration-300 text-white ${
                  isTimeUp
                    ? "bg-secondaryTheme hover:bg-secondaryThemeHover"
                    : "bg-primary"
                }`}
              >
                {orderDetail?.orderStatus === "WAITFORCONFIRM"
                  ? orderStatus(orderDetail?.orderStatus)
                  : `${countdown} 後可領取`}
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default OrderDetail;

/*

============= note =============
1. well design => make margin RWD
<section className="flex">
  <div className="basis-[63%]">left</div>
  <div className="basis-[37%] ml-[10%]">right</div>
</section>

*/
