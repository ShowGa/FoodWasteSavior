import { a } from "motion/react-client";
import React from "react";
// react icons
import { BiSolidPurchaseTag } from "react-icons/bi";
// react router
import { Link } from "react-router-dom";

const ProfileFuntionCard = () => {
  return (
    <Link to={"/"}>
      <div className="flex flex-col items-start gap-12 border-2 border-gray-200 rounded-lg p-4 shadow-md min-w-[22rem]">
        <div>
          <BiSolidPurchaseTag className="text-4xl" />
        </div>

        <div>
          <h3 className="text-xl font-bold">歷史訂單</h3>
          <p className="text-gray-500">來看看你拯救了多少食物</p>
        </div>
      </div>
    </Link>
  );
};

export default ProfileFuntionCard;
