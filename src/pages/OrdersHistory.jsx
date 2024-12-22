import React, { useState, useEffect } from "react";
// components
import OrderHistoryListCard from "../components/OrderHistoryListCard";
// service
import OrderService from "../service/OrderService";
// toast
import toast from "react-hot-toast";

const OrdersHistory = () => {
  const [orderHistoryList, setOrderHistoryList] = useState([]);

  const handleGetOrderHistoryList = () => {
    OrderService.getOrderHistoryList()
      .then((res) => {
        setOrderHistoryList(res.data.data);
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
    handleGetOrderHistoryList();
  }, []);

  return (
    <main className="p-[1.5rem]">
      <div className="flex flex-col p-[1.5rem] min-h-screen">
        {/* title */}
        <div className="text-center">
          <h1 className="text-4xl">歷史訂單</h1>
        </div>

        <div>
          {/* card */}
          <div className="flex flex-wrap gap-4 mt-8 max-md:flex-col">
            {orderHistoryList.map((order) => (
              <OrderHistoryListCard key={order.orderId} order={order} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrdersHistory;
