import React from "react";
// image
import { img1 } from "../assets";
// icon
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoCalendarClearOutline } from "react-icons/io5";
import { GoClock } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { main } from "motion/react-client";

const PackageDetail = () => {
  return (
    <main className="px-[12.25rem]">
      <section className="mt-10 rounded-xl">
        <div className="w-full h-[30rem]">
          <img
            src={img1}
            alt=""
            className="rounded-xl w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="flex mt-10">
        <div className="basis-[63%]">
          <div className="border-b border-gray-200 pb-5">
            <div className="flex items-center gap-2 text-xl">
              <HiOutlineShoppingBag />
              <h3>John's Store 驚喜包</h3>
            </div>

            <div className="flex items-center mt-2 gap-2 text-xl">
              <GoClock className="" />
              <h3 className="">11月28日 10:00 AM - 11:00 AM</h3>
            </div>
          </div>

          <div className="border-b border-gray-200 py-5">
            <div className="flex items-center gap-2 text-xl">
              <IoLocationOutline />
              <div>
                <h3>臺北市信義區信義路五段7號</h3>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-200 py-5">
            <h3 className="text-xl font-bold">驚喜包裡有甚麼</h3>
            <p className="text-lg font-light mt">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
              omnis quaerat nulla vel aliquam, perspiciatis temporibus fuga.
              Blanditiis iure magnam ducimus enim! Illo repudiandae, qui
              corporis at delectus in doloribus?
            </p>
          </div>

          <div className="border-b border-gray-200 py-5">
            <h3 className="text-xl font-bold">成分與過敏原</h3>
            <p className="text-lg font-light mt">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
              omnis quaerat nulla vel aliquam, perspiciatis temporibus fuga.
              Blanditiis iure magnam ducimus enim! Illo repudiandae, qui
              corporis at delectus in doloribus?
            </p>
          </div>
        </div>

        <div className="basis-[37%] ml-[10%] w-full">
          {/* add some shadow */}
          <div className="flex flex-col gap-5 border border-gray-200 rounded-xl p-7 items-center top-0 w-full text-center shadow-lg">
            <div>
              <h3 className="text-3xl font-bold">NT$ 100</h3>
            </div>

            <button className="rounded-lg p-2 w-full text-white bg-secondaryTheme">
              購買
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PackageDetail;
