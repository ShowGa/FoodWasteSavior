import React from "react";
// image
import { img2 } from "../assets";
// icons
import { FaCheckCircle } from "react-icons/fa";

const OrderHistoryDetail = () => {
  return (
    <main>
      <div className="flex flex-col gap-4 items-center px-[4rem] py-[1.5rem]">
        <h1 className="text-4xl font-bold mb-4">Order History Detail</h1>

        <div className="rounded-lg max-w-[30rem] w-full bg-secondaryThemeHover pt-[0.3rem] px-[0.3rem]">
          <section className="py-[1rem] px-[1.75rem] border border-gray-300 rounded-lg bg-white">
            {/* Store Information */}
            <div className="flex gap-4 mb-7">
              <div className="rounded-full border-2 border-gray-300 w-[3rem] h-[3rem]">
                <img
                  src={img2}
                  alt=""
                  className="rounded-full w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-xl">John's Bakery</h3>
                <p className="text-sm">烘焙商品</p>
              </div>
            </div>

            {/* Order Information */}
            <div className="flex flex-col gap-7">
              <div className="flex justify-between">
                <div>
                  <p className="font-bold text-gray-400">Collected Date</p>
                  <p className="text-xl">2024/01/01</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-400">Collection Time</p>
                  <p className="text-xl">10:00 AM - 11:00 AM</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <p className="font-bold text-gray-400">Surprise Bag</p>
                  <p className="text-xl">烘焙商品</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-400">Total</p>
                  <p className="text-xl">NT$ 10</p>
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
