import React from "react";
// components
import ContributionCard from "../components/ContributionCard";
import ProfileFuntionCard from "../components/ProfileFuntionCard";
// assets
import { img1 } from "../assets";
// react icons
import { FaTree, FaMoneyBill } from "react-icons/fa";

const contributionState = [
  {
    title: "二氧化碳減少",
    icon: <FaTree className="text-6xl" />,
    number: 1000,
    unit: "顆樹被種植",
  },
  {
    title: "省下的錢",
    icon: <FaMoneyBill className="text-6xl" />,
    number: 1000,
    unit: "元",
  },
];

const UserProfile = () => {
  return (
    <main className="px-[4rem] py-[1.5rem]">
      <div className="flex flex-col gap-8 p-[1.5rem] min-h-screen">
        {/* state*/}
        <section>
          <h1 className="text-center text-4xl font-bold mb-4">
            地球因為你而更美麗
          </h1>
          {/* state card */}
          <div className="flex justify-center flex-wrap gap-6">
            {contributionState.map((state, index) => (
              <ContributionCard state={state} key={index} />
            ))}
          </div>
        </section>

        {/* function */}
        <section>
          <h1 className="text-center text-4xl font-bold mb-4">功能選項</h1>

          <div className="flex justify-center flex-wrap gap-6">
            <ProfileFuntionCard />
          </div>
        </section>

        {/* profile */}
        <section className="flex flex-col justify-center items-center gap-4 mt-[5rem]">
          <h1 className="text-4xl font-bold">個人資料</h1>
          <form className="flex flex-col gap-8 w-full max-w-2xl">
            <div className="flex justify-center">
              <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden">
                <img
                  src={img1}
                  alt="使用者頭像"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h2 className="text-xl">姓名</h2>
                <input
                  type="text"
                  className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl">電子信箱</h2>
                <input
                  type="email"
                  className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-secondaryTheme text-white px-6 py-2 rounded-lg hover:bg-secondaryThemeHover transition-colors"
                >
                  儲存變更
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};

export default UserProfile;

/* 

============= note =============
1. move the order to separate button


========== todo ==========
1. RWD

*/
