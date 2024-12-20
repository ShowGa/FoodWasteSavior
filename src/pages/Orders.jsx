import React, { useState, useEffect } from "react";
// components
import OrderListCard from "../components/OrderListCard";
// zustand
import useAuthUserStore from "../zustand/useAuthUser";
// service
import OrderService from "../service/OrderService";
// toast
import toast from "react-hot-toast";

const Orders = () => {
  const { authUser } = useAuthUserStore();

  const [orderList, setOrderList] = useState([]);

  console.log(orderList);

  const handleGetOrderList = () => {
    OrderService.getOrderList(authUser.userId)
      .then((res) => {
        setOrderList(res.data.data);
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
    handleGetOrderList();
  }, []);

  return (
    <main className="p-[1.5rem]">
      <div className="flex flex-col p-[1.5rem] min-h-screen">
        {/* title */}
        <div className="text-center">
          <h1 className="text-4xl">訂單</h1>
        </div>

        <div>
          <h2>2024-12-12</h2>

          {/* card */}
          <div className="flex flex-wrap gap-4 mt-8">
            {orderList.map((order) => (
              <OrderListCard key={order.id} order={order} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Orders;
