import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// image
// icon
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GoClock } from "react-icons/go";
// service
import PackageService from "../service/PackageService";
// toast
import toast from "react-hot-toast";
// icon
import { FaHeart, FaRegHeart } from "react-icons/fa";

const PackageDetail = () => {
  const [packageDetail, setPackageDetail] = useState({});
  const [timesUp, setTimesUp] = useState(false);
  const [isFavorite, setIsFavorite] = useState(true);

  const { packageId } = useParams();

  const checkTimeUp = (startTime) => {
    // 取得台灣當前時間的 HH:mm:ss 格式
    const taiwanTime = new Date().toLocaleTimeString("en-US", {
      timeZone: "Asia/Taipei",
      hour12: false, // 24小時制
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    // 直接比較時間字串
    if (taiwanTime >= startTime) {
      setTimesUp(true);
    } else {
      setTimesUp(false);
    }
  };

  const handleGetPackageDetail = async () => {
    PackageService.getPackageDetail(packageId)
      .then((res) => {
        setPackageDetail(res.data.data);
      })
      .catch((err) => {
        const message =
          err.response?.data.message ||
          "糟糕!伺服器似乎出現了問題，請聯絡客服。";
        toast.error(message);
        console.log(err);
      });
  };

  useEffect(() => {
    handleGetPackageDetail();
  }, []);

  useEffect(() => {
    checkTimeUp(packageDetail?.packageStartTime, packageDetail?.packageEndTime);
  }, [packageDetail]);

  return (
    <main className="px-[12.25rem]">
      <section className="mt-10 rounded-xl relative">
        <div className="w-full h-[30rem]">
          <img
            src={packageDetail?.packageCoverImageUrl}
            alt=""
            className="rounded-xl w-full h-full object-cover"
          />
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
      </section>

      <section className="flex mt-10">
        <div className="basis-[63%]">
          <div className="border-b border-gray-200 pb-5">
            <div className="flex items-center gap-2 text-xl">
              <HiOutlineShoppingBag />
              <h3>{packageDetail?.packageName}</h3>
            </div>

            <div className="flex items-center mt-2 gap-2 text-xl">
              <GoClock className="" />
              <h3 className="">
                今日 {packageDetail?.packageStartTime} -{" "}
                {packageDetail?.packageEndTime}
              </h3>
            </div>
          </div>

          {/* <div className="border-b border-gray-200 py-5">
            <div className="flex items-center gap-2 text-xl">
              <IoLocationOutline />
              <div>
                <h3>臺北市信義區信義路五段7號</h3>
              </div>
            </div>
          </div> */}

          <div className="border-b border-gray-200 py-5">
            <h3 className="text-xl font-bold">驚喜包裡有甚麼</h3>
            <p className="text-lg font-light mt-2">
              {packageDetail?.packageDescription}
            </p>
          </div>

          <div className="border-b border-gray-200 py-5">
            <h3 className="text-xl font-bold">成分與過敏原</h3>
            <p className="text-lg font-light mt-2">
              {packageDetail?.packageAllergenDesc || "無"}
            </p>
          </div>
        </div>

        <div className="basis-[37%] ml-[10%] w-full relative">
          {/* add some shadow */}
          <div className="flex flex-col gap-5 border border-gray-200 rounded-xl p-7 items-center top-0 w-full text-center shadow-lg">
            <div>
              {/* 劃掉 */}
              <p className="text-sm font-light text-gray-400 line-through">
                NT$ {packageDetail?.originPrice}
              </p>
              <h3 className="text-3xl font-bold">
                NT$ {packageDetail?.discountPrice}
              </h3>
            </div>

            <button
              className={`rounded-lg p-2 w-full text-white font-bold ${
                timesUp
                  ? "bg-gray-400 pointer-events-none"
                  : "bg-secondaryTheme"
              }`}
            >
              {timesUp ? "今日預約已結束" : "預約"}
            </button>

            {/* tag for quantityRemianing */}
            <div className="absolute top-2 left-2 bg-primaryTheme rounded-full p-1 bg-secondaryThemeHover text-white">
              <h3 className="text-xs">
                剩餘{packageDetail?.quantityRemaining}
              </h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PackageDetail;
