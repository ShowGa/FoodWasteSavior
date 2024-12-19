import React, { useState } from "react";
// react router
import { Link } from "react-router-dom";
// icon heart
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const DiscoverListCard = ({ packageData }) => {
  // this will replace with backend data

  // this will be the cardData from backend => change later
  const [isFavorite, setIsFavorite] = useState(true);

  return (
    <Link
      to={`/package/${packageData.packageId}`}
      className="c-discover-list-card"
    >
      <div className="w-full h-32 relative overflow-hidden">
        <img
          src={packageData.packageCoverImageUrl}
          alt=""
          className="c-discover-list-card_img"
        />

        <div className="absolute bottom-2 left-2 flex items-center gap-2">
          <div className="border-2 border-gray-300 rounded-full overflow-hidden">
            <img
              src={packageData.storeLogoImageUrl}
              alt=""
              className="w-10 h-10"
            />
          </div>

          <p className="text-xl text-white font-bold">
            {packageData.storeName}
          </p>
        </div>

        <div className="rounded-full bg-black bg-opacity-50 absolute top-2 right-2 w-10 h-10">
          {/* make this element horizentally and vertically center in the div */}
          <p className="flex items-center justify-center h-full text-2xl">
            {isFavorite ? (
              <FaHeart className="text-white" />
            ) : (
              <FaRegHeart className="text-white" />
            )}
          </p>
        </div>
      </div>

      <div className="px-4 py-2">
        <div>
          <div>
            <h3 className="text-xl font-bold">{packageData.packageName}</h3>
            <p className="text-xs">
              {packageData.isActive
                ? `今日 : ${packageData.pickupStartTime} - ${packageData.pickupEndTime}`
                : "今日不銷售"}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-2">
          <p className="text-xl font-bold">
            NT$ {packageData.packageDiscountPrice}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default DiscoverListCard;
