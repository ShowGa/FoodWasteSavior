import React from "react";
import { Link } from "react-router-dom";
// icons
import { FaMapMarkerAlt } from "react-icons/fa";

const StoreCard = ({ storeInfo }) => {
  // ============================
  // Helper Functions
  // ============================
  const convertDistanceToKilometer = (distance) => {
    return (distance / 1000).toFixed(2);
  };

  return (
    <Link to={`/store/${storeInfo.storeId}`}>
      <div className="c-store-card w-[18rem] max-md:w-full">
        {/* Store Image */}
        <div className="c-store-img-container overflow-hidden">
          <img
            src={storeInfo.storeCoverImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Store Info */}
        <div className="flex flex-col items-start px-4 py-4">
          <div>
            <p className="text-2xl">{storeInfo.storeName}</p>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <FaMapMarkerAlt />
            <p>{storeInfo.storeAddress}</p>
          </div>
          <div className="flex items-center gap-3 mt-3 text-gray-500">
            <p>{convertDistanceToKilometer(storeInfo.storeDistance)} km </p>
            <p> | </p>
            <p> ★ {storeInfo.storeRating}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default StoreCard;

/*

========== the content of the store card =========
1. store image
2. store name
3. store address
4. store rating
5. store distance

*/
