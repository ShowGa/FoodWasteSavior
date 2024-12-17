import React, { useState, useEffect } from "react";
// react router
import { Link, useParams } from "react-router-dom";
// image
import { img1, img2 } from "../assets";
// icon
import { GoLocation } from "react-icons/go";
// service
import StoreService from "../service/StoreService";
import PackageService from "../service/PackageService";
// react hot toast
import toast from "react-hot-toast";
// image
import { star, comments } from "../assets";

const PackageCard = ({ packageCardInfo }) => {
  return (
    <Link to={`/package/${packageCardInfo.packageId}`} className="w-full">
      <div className="flex items-center gap-5 p-3 border border-gray-200 rounded-xl w-full shadow-sm">
        <div className="w-[5rem] h-[5rem] rounded-xl">
          <img
            src={packageCardInfo.packageCoverImage}
            alt=""
            className="rounded-full w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-lg font-bold">{packageCardInfo.packageName}</h3>
          <p className="text-lg font-bold">
            NT$ {packageCardInfo.discountPrice}
          </p>
        </div>
      </div>
    </Link>
  );
};

const StoreDetail = () => {
  const { storeId } = useParams();

  const [storeDetail, setStoreDetail] = useState({});
  const [packageCards, setPackageCards] = useState([]);

  const handleGetStoreDetail = () => {
    StoreService.getStoreDetail(storeId)
      .then((response) => {
        setStoreDetail(response.data.data);
        toast.success("取得商家資料成功!");
      })
      .catch((error) => {
        const message =
          error.response?.data.message ||
          "糟糕!伺服器似乎出現了問題，請聯絡客服。";
        toast.error(message);
        console.log(error);
      });
  };

  const handleGetPackageCard = () => {
    PackageService.getStoreDetailPackageCard(storeId)
      .then((response) => {
        setPackageCards(response.data.data);
      })
      .catch((error) => {
        const message =
          error.response?.data.message ||
          "糟糕!伺服器似乎出現了問題，請聯絡客服。";
        toast.error(message);
        console.log(error);
      });
  };

  useEffect(() => {
    handleGetStoreDetail();
    handleGetPackageCard();
  }, []);

  return (
    <main className="px-[12.25rem] max-lg:px-5">
      <section className="mt-10 rounded-xl">
        <div className="w-full h-[30rem] max-lg:h-[15rem]">
          <img
            src={storeDetail.coverImageUrl}
            alt=""
            className="rounded-xl w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="flex mt-10 max-lg:flex-col">
        <div className="basis-[63%] pr-[5%]">
          <div className="border-b border-gray-200 pb-5">
            <div className="flex items-center gap-5 text-xl">
              <div className="w-[5rem] h-[5rem] rounded-full border border-gray-400">
                <img
                  src={storeDetail.logoImageUrl}
                  alt=""
                  className="rounded-full w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold">{storeDetail.storeName}</h3>
                <p className="flex items-center gap-2 text-sm font-light">
                  <GoLocation />
                  <span>{storeDetail.storeAddress}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-200 py-5">
            <div>
              <h3 className="text-xl font-bold">關於我們</h3>
              <p className="text-lg font-light">{storeDetail.about}</p>
            </div>

            <div className="flex justify-evenly gap-2 mt-6">
              <div className="flex flex-col items-center gap-2">
                <img src={star} alt="" className="w-10 h-10" />
                <p className="text-xl font-bold">{storeDetail.storeRating}</p>
                <p className="text-sm font-light">顧客滿意度</p>
              </div>

              <div className="w-[1px] h-[6rem] bg-gray-400"></div>

              <div className="flex flex-col items-center gap-2">
                <img src={comments} alt="" className="w-10 h-10" />
                <p className="text-xl font-bold">
                  {storeDetail.storeRatingCount}
                </p>
                <p className="text-sm font-light">次顧客評論</p>
              </div>
            </div>

            <div className="mt-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
              vero iste aliquid eum, distinctio dolor doloremque sunt
              consequuntur odit quibusdam ratione, ipsa, fugit amet commodi
              quaerat! Ea, commodi. Nihil, veritatis.
            </div>
          </div>
        </div>

        <div className="basis-[37%] w-full">
          {/* store product */}
          <div className="flex flex-col gap-5 border border-gray-200 rounded-xl p-7 items-center top-0 w-full shadow-lg">
            <div className="text-2xl font-bold">我們的商品</div>

            {/* map this */}
            {packageCards.map((packageCardInfo) => (
              <PackageCard
                key={packageCardInfo.packageId}
                packageCardInfo={packageCardInfo}
              />
            ))}
            {packageCards.length === 0 && (
              <div className="text-lg font-light">目前沒有任何商品</div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default StoreDetail;

/*
============= Store Detail Search logic =============
1. find store detail from the url params
2. fetch store detail from the server
3. display store detail

============= Store Detail packagecard Search logic =============
1. another api to get the package card info
2. find by storeId
3. display the package card info


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
