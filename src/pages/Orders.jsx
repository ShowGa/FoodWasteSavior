import React from "react";
// components
import OrderListCard from "../components/OrderListCard";

const Orders = () => {
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
            <OrderListCard />
            <OrderListCard />
            <OrderListCard />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Orders;
