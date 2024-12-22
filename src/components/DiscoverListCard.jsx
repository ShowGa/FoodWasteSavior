import React, { useState } from "react";
// react router
import { Link } from "react-router-dom";
// icon heart
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
// zustand
import useAuthUserStore from "../zustand/useAuthUser";
// service
import FavoriteService from "../service/FavoriteService";
// toast
import toast from "react-hot-toast";

const DiscoverListCard = ({ packageData, setFavoriteList }) => {
  const { authUser } = useAuthUserStore();

  const [canSubmit, setCanSubmit] = useState(true);

  const handleUpdateFavoriteList = (isFavorite) => {
    setFavoriteList((prev) => {
      return prev.map((item) =>
        item.packageId === packageData.packageId
          ? { ...item, isFavorite }
          : item
      );
    });
  };

  const handleUpdateFavorite = (e) => {
    e.preventDefault();

    if (!canSubmit) {
      toast.error("雅美蝶!");
      return;
    }

    FavoriteService.updateFavorite(packageData.packageId)
      .then((res) => {
        const isFavorite = res.data.data;
        // check if true or false from backend new data
        if (isFavorite) {
          toast.success("已加入最愛");
        } else {
          toast.success("已移除最愛");
        }

        handleUpdateFavoriteList(isFavorite);

        setCanSubmit(false);
        setTimeout(() => {
          setCanSubmit(true);
        }, 1500);
      })
      .catch((err) => {
        const message =
          err.response?.data.message ||
          "糟糕!伺服器似乎出現了問題，請聯絡客服。";
        toast.error(message);
        console.log(err);
      });
  };

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

        <button
          className="rounded-full bg-black bg-opacity-50 absolute top-2 right-2 w-10 h-10"
          onClick={handleUpdateFavorite}
        >
          {/* make this element horizentally and vertically center in the div */}
          <p className="flex items-center justify-center h-full text-2xl">
            {packageData.isFavorite ? (
              <FaHeart className="text-white" />
            ) : (
              <FaRegHeart className="text-white" />
            )}
          </p>
        </button>
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
