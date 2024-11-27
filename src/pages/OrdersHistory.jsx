import React from "react";
// components
import OrderHistoryListCard from "../components/OrderHistoryListCard";

const OrdersHistory = () => {
  return (
    <main className="p-[1.5rem]">
      <div className="flex flex-col p-[1.5rem] min-h-screen">
        {/* title */}
        <div className="text-center">
          <h1 className="text-4xl">歷史訂單</h1>
        </div>

        <div>
          <h2>2024-12-12</h2>

          {/* card */}
          <div className="flex flex-wrap gap-4 mt-8">
            <OrderHistoryListCard />
            <OrderHistoryListCard />
            <OrderHistoryListCard />
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrdersHistory;
