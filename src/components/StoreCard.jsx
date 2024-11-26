import React from "react";
// icons
import { FaMapMarkerAlt } from "react-icons/fa";

const StoreCard = ({ storeInfo }) => {
  return (
    <div className="c-store-card">
      {/* Store Image */}
      <div className="c-store-img-container">
        <img
          src={storeInfo.storeImage}
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
          <p>{storeInfo.address}</p>
        </div>
        <div className="flex items-center gap-3 mt-3 text-gray-500">
          <p>{storeInfo.distance} mi </p>
          <p> | </p>
          <p> ★ {storeInfo.rating}</p>
        </div>
      </div>
    </div>
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
