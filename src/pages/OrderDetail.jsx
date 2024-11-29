import React from "react";
// icons
import { IoLocationOutline } from "react-icons/io5";
// image
import { img2 } from "../assets";
import { img } from "motion/react-client";

const OrderDetail = () => {
  return (
    <main>
      <div className="flex flex-col gap-4 items-center px-[4rem] py-[1.5rem]">
        <h1 className="text-4xl font-bold mb-4">Order Detail</h1>

        {/* Store Information */}
        <div className="max-w-[30rem] w-full">
          <section className="flex flex-col justify-between items-center gap-4 py-[1.5rem] border border-gray-300 rounded-lg shadow-md">
            <div className="w-[5rem] h-[5rem]">
              <img src={img2} alt="" className="rounded-full object-cover" />
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold leading-none">John's Store</p>
              <span>123 Main St, Anytown, USA</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Find Store</span>
              <IoLocationOutline />
            </div>
          </section>

          {/* Order Information */}
          <section className="mt-4 py-[1rem] px-[1.75rem] border border-gray-300 rounded-lg shadow-md">
            <div className="flex flex-col gap-5">
              <div className="flex justify-between">
                <div>
                  <p className="font-bold text-gray-400">Date</p>
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
                  <p className="text-xl">$10</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-300 border-dashed my-4"></div>

            <div className="text-center mt-4">
              <button
                className="px-4 py-2 rounded-full w-full text-white bg-secondaryTheme "
                text-white
              >
                點擊完成領取
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
