import React, { useState, useEffect } from "react";
// router
import { useParams } from "react-router-dom";
// image
import { img2 } from "../assets";
// icons
import { FaCheckCircle } from "react-icons/fa";
// service
import OrderService from "../service/OrderService";
// toast
import toast from "react-hot-toast";
// utils convertor
import { categoryName } from "../utils/convertor";

const OrderHistoryDetail = () => {
  const { orderId } = useParams();
  const [orderDetail, setOrderDetail] = useState(null);

  const handleGetOrderHistoryDetail = () => {
    OrderService.getOrderHistoryDetail(orderId)
      .then((res) => {
        setOrderDetail(res.data.data);
      })
      .catch((err) => {
        const message =
          err.response?.data.message ||
          "糟糕!伺服器似乎出現了問題，請聯絡客服。";
        toast.error(message);
        console.log(err);
      });
  };

  useEffect(() => {
    handleGetOrderHistoryDetail();
  }, []);

  return (
    <main>
      <div className="flex flex-col gap-4 items-center px-[4rem] py-[1.5rem]">
        <h1 className="text-4xl font-bold mb-4">訂單資訊</h1>

        <div className="rounded-lg max-w-[30rem] w-full bg-secondaryThemeHover pt-[0.3rem] px-[0.3rem]">
          <section className="py-[1rem] px-[1.75rem] border border-gray-300 rounded-lg bg-white">
            {/* Store Information */}
            <div className="flex gap-4 mb-7">
              <div className="rounded-full border-2 border-gray-300 w-[3rem] h-[3rem]">
                <img
                  src={orderDetail?.storeLogo}
                  alt=""
                  className="rounded-full w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-xl">{orderDetail?.storeName}</h3>
                <p className="text-sm">{orderDetail?.storeAddress}</p>
              </div>
            </div>

            {/* Order Information */}
            <div className="flex flex-col gap-7">
              <div className="flex justify-between">
                <div>
                  <p className="font-bold text-gray-400">領取時間</p>
                  <p className="text-xl">{orderDetail?.orderDate}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-400">商品種類</p>
                  <p className="text-xl">
                    {categoryName(orderDetail?.packageCategory)}
                  </p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <p className="font-bold text-gray-400">商品名稱</p>
                  <p className="text-xl">{orderDetail?.packageName}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-400">總價</p>
                  <p className="text-xl">NT$ {orderDetail?.orderTotalPrice}</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <p className="font-bold text-gray-400">訂單確認碼</p>
                  <p className="text-xl">{orderDetail?.orderConfirmCode}</p>
                </div>
              </div>
            </div>
          </section>

          {/* statement */}
          <div className="flex justify-center items-center gap-2 py-[0.5rem] text-xl text-white">
            <FaCheckCircle className="" />
            <p className="">已完成領取</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrderHistoryDetail;
