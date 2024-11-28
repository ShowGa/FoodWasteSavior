import React from "react";
// image
import { img1, img2 } from "../assets";
// icon
import { GoLocation } from "react-icons/go";

const StoreDetail = () => {
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
        <div className="basis-[63%] pr-[5%]">
          <div className="border-b border-gray-200 pb-5">
            <div className="flex items-center gap-5 text-xl">
              <div className="w-[5rem] h-[5rem] rounded-full border border-gray-400">
                <img
                  src={img2}
                  alt=""
                  className="rounded-full w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold">John's Bakery</h3>
                <p className="flex items-center gap-2 text-sm font-light">
                  <GoLocation />
                  <span>臺北市信義區信義路五段7號</span>
                </p>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-200 py-5">
            <h3 className="text-xl font-bold">關於我們</h3>
            <p className="text-lg font-light">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
              omnis quaerat nulla vel aliquam, perspiciatis temporibus fuga.
              Blanditiis iure magnam ducimus enim! Illo repudiandae, qui
              corporis at delectus in doloribus? Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Dolor omnis quaerat nulla vel
              aliquam, perspiciatis temporibus fuga. Blanditiis iure magnam
              ducimus enim! Illo repudiandae, qui corporis at delectus in
              doloribus?
            </p>

            <div className="mt-2">Map</div>
          </div>
        </div>

        <div className="basis-[37%] w-full">
          {/* store product */}
          <div className="flex flex-col gap-5 border border-gray-200 rounded-xl p-7 items-center top-0 w-full shadow-lg">
            {/* map this */}
            <div className="flex items-center gap-5 p-3 border border-gray-200 rounded-xl w-full shadow-sm">
              <div className="w-[5rem] h-[5rem] rounded-xl">
                <img
                  src={img1}
                  alt=""
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">Product Name</h3>
                <p className="text-xs font-light">今日 : 10:00 AM - 11:00 AM</p>
                <p className="text-lg font-bold">NT$ 100</p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-3 border border-gray-200 rounded-xl w-full shadow-sm">
              <div className="w-[5rem] h-[5rem] rounded-xl">
                <img
                  src={img1}
                  alt=""
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">Product Name</h3>
                <p className="text-xs font-light">今日 : 10:00 AM - 11:00 AM</p>
                <p className="text-lg font-bold">NT$ 100</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default StoreDetail;

/*

============ left Detail ============
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


============ right Detail ============


*/
