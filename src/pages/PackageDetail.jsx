import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// image
// icon
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GoClock } from "react-icons/go";
// service
import PackageService from "../service/PackageService";
import FavoriteService from "../service/FavoriteService";
// components
import OrderModal from "../components/OrderModal";
// toast
import toast from "react-hot-toast";
// icon
import { FaHeart, FaRegHeart } from "react-icons/fa";

const PackageDetail = () => {
  const { packageId } = useParams();

  const [packageDetail, setPackageDetail] = useState({});
  const [timesUp, setTimesUp] = useState(false);
  const [canSubmit, setCanSubmit] = useState(true);

  const [showModal, setShowModal] = useState(false);

  const handleSubmitFavorite = () => {
    if (!canSubmit) {
      toast.error("拜託別搞破壞!");
      return;
    }

    FavoriteService.updateFavorite(packageId)
      .then((res) => {
        const isFavorite = res.data.data;
        // check if true or false from backend new data
        if (isFavorite) {
          toast.success("已加入最愛");
        } else {
          toast.success("已移除最愛");
        }
        setPackageDetail({ ...packageDetail, isFavorite });
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
    <main className="px-[12.25rem] max-xl:px-[8rem] max-lg:px-[4rem] max-md:px-2">
      <section className="mt-10 rounded-xl relative">
        <div className="w-full h-[30rem] max-lg:h-[18rem]">
          <img
            src={packageDetail?.packageCoverImageUrl}
            alt=""
            className="rounded-xl w-full h-full object-cover"
          />
        </div>
        <button
          className="rounded-full bg-black bg-opacity-50 absolute bottom-4 right-4 w-10 h-10 cursor-pointer"
          onClick={handleSubmitFavorite}
        >
          {/* make this element horizentally and vertically center in the div */}
          <p className="flex items-center justify-center h-full text-2xl">
            {packageDetail?.isFavorite ? (
              <FaHeart className="text-white" />
            ) : (
              <FaRegHeart className="text-white" />
            )}
          </p>
        </button>
      </section>

      <section className="flex mt-10 max-lg:flex-col max-lg:items-center">
        <div className="basis-[63%] max-lg:w-full">
          <div className="border-b border-gray-200 pb-5">
            {/* tag for quantityRemianing */}
            <div className="bottom-4 w-fit left-4 bg-primary rounded-full p-1 px-2 text-white font-bold">
              <h3 className="text-xl max-lg:text-sm">
                剩餘{packageDetail?.quantityRemaining}
              </h3>
            </div>

            <div className="flex items-center gap-2 text-xl mt-4">
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
              {packageDetail?.packageAllergensDesc || "無"}
            </p>
          </div>
        </div>

        <div className="basis-[37%] ml-[10%] w-full max-w-[20rem] relative max-lg:ml-0 max-lg:mt-10 max-lg:max-w-none">
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
                timesUp || packageDetail?.quantityRemaining <= 0
                  ? "bg-gray-400 pointer-events-none"
                  : "bg-secondaryTheme"
              }`}
              onClick={() => setShowModal(true)}
            >
              {timesUp || packageDetail?.quantityRemaining <= 0
                ? "今日預約已結束"
                : "預約"}
            </button>
          </div>
        </div>
      </section>

      {showModal && (
        <OrderModal setShowModal={setShowModal} packageDetail={packageDetail} />
      )}
    </main>
  );
};

export default PackageDetail;
