import React, { useEffect, useState } from "react";
// css
import "./css/pagesCSS.css";
// zustand
import { useHeaderHeightStore } from "../zustand/mapUXMechanismStore";
import useAuthUserPositionStore from "../zustand/useAuthUserPosition";
// services
import StoreService from "../service/StoreService";
// components
import StoreCard from "../components/StoreCard";
import MapboxSearchPage from "../components/MapboxSearchPage";
import MapFilterModal from "../components/MapFilterModal";
// images
import { img1, img2, img3 } from "../assets";
// icons
import { AiOutlineControl, AiOutlineSearch } from "react-icons/ai";
// mapbox
// toast
import toast from "react-hot-toast";

const storeInfo = [
  {
    storeName: "Mark's Bakery",
    storeImage: img1,
    address: "123 Main St, Anytown, USA",
    rating: 4.7,
    distance: 1.2,
  },
  {
    storeName: "John's Bakery",
    storeImage: img2,
    address: "Taipei, Taiwan",
    rating: 4.9,
    distance: 1.5,
  },
  {
    storeName: "Jane's Bakery",
    storeImage: img3,
    address: "Tokyo, Japan",
    rating: 4.8,
    distance: 2.0,
  },
  {
    storeName: "Jane's Bakery",
    storeImage: img3,
    address: "Tokyo, Japan",
    rating: 4.8,
    distance: 2.0,
  },
];

const Search = () => {
  // zustand
  const { header2Height, mapHeight, setMapHeight } = useHeaderHeightStore();
  const { userPosition } = useAuthUserPositionStore();

  // search store data
  const [searchStoreData, setSearchStoreData] = useState([]);
  // user position
  const [userPositionForSearch, setUserPositionForSearch] = useState(
    { ...userPosition, radius: 1000 } || {
      longitude: 121.5654,
      latitude: 25.033,
      radius: 1000,
    }
  );

  // filter modal
  const [showFilterModal, setShowFilterModal] = useState(false);

  // drag bar state
  const [showDragBar, setShowDragBar] = useState(false);

  // ===================== //
  //   helper functions
  // ===================== //

  const fetchStoreDataByPosition = () => {
    StoreService.getStoreDataByPosition(userPositionForSearch)
      .then((response) => {
        const storeData = response.data.data;

        setSearchStoreData(storeData);
        if (storeData.length > 0) {
          toast.success("找到附近的商家囉!");
        } else {
          toast.error("這附近沒有商家喔!");
        }
      })
      .catch((error) => {
        const message =
          error.response?.data.message ||
          "糟糕!伺服器似乎出現了問題，請聯絡客服。";
        toast.error(message);
        console.log(error);
      });
  };
  // ===================== //
  //   helper functions
  // ===================== //
  const updateInnerHeight = () => {
    setMapHeight(window.innerHeight);
  };

  useEffect(() => {
    updateInnerHeight();
    window.addEventListener("resize", updateInnerHeight);

    return () => {
      window.removeEventListener("resize", updateInnerHeight);
    };
  }, []);

  useEffect(() => {
    fetchStoreDataByPosition();
  }, []);

  return (
    <main>
      <div className="flex flex-row">
        {/* left side */}
        <section className="basis-[63%] p-[1.5rem] max-md:hidden">
          {/* <div className="bg-green-300 w-full">
            <div>hi</div>
            <div></div>
          </div> */}

          {/* search bar */}
          <div className="flex justify-center items-center space-x-4 mb-4">
            {/* <div className="p-search-bar">
              <input
                type="text"
                placeholder="Search..."
                className="p-search_input"
              />
              <button className="h-full">
                <AiOutlineSearch className="text-3xl cursor-pointer" />
              </button>
            </div> */}

            <div
              className="p-filter-options"
              onClick={() => setShowFilterModal(true)}
            >
              <AiOutlineControl className="text-3xl" />
            </div>
          </div>

          <div className="flex flex-wrap gap-4 w-full bg-white">
            {searchStoreData.map((storeData, index) => (
              <StoreCard storeInfo={storeData} key={storeData.storeId} />
            ))}
          </div>
        </section>

        {/* mobile */}

        <section
          className={`fixed w-full h-[40rem] bg-white z-20 py-[4rem] px-[2rem] rounded-xl md:hidden ${
            showDragBar ? "bottom-0" : "bottom-[-30rem]"
          } transition-all duration-300 ease-in-out`}
        >
          {/* drag bar */}
          <div
            className="absolute top-5 left-1/2 -translate-x-1/2 w-[7rem] h-[0.5rem] bg-gray-300 rounded-xl cursor-grab"
            onClick={() => setShowDragBar(!showDragBar)}
          ></div>

          <div className="flex flex-col flex-wrap gap-4 w-full bg-white overflow-y-auto">
            {searchStoreData.map((storeData, index) => (
              <StoreCard storeInfo={storeData} key={storeData.storeId} />
            ))}
          </div>
        </section>

        {/* right side */}
        <section className="basis-[37%] max-md:basis-full">
          <div
            className="sticky w-full"
            style={{
              top: `${header2Height}px`,
              height: `${mapHeight}px`,
            }}
          >
            <MapboxSearchPage
              searchStoreData={searchStoreData}
              setSearchStoreData={setSearchStoreData}
              userPositionForSearch={userPositionForSearch}
              setUserPositionForSearch={setUserPositionForSearch}
              fetchStoreDataByPosition={fetchStoreDataByPosition}
            />
          </div>
        </section>
      </div>

      {showFilterModal && (
        <MapFilterModal setShowFilterModal={setShowFilterModal} />
      )}
    </main>
  );
};

export default Search;

/*
============= Create first ==============
1. 

============= Create later ==============
1. Card for content
2. Map position mechanism -------- (done)
3. Map height mechanism -------- (done)
  1. create zustand for store the calc data of the mapHeight


============= Search logic ==============
1. postionSearchData useState
  - default: userPosition
  - change by moving the map
  - change by clicking the card
  - change distance by fileter slider dafault 1km

  ============= functionality ==============
1. click button to fetch store data by position
2. drag the map to change the position

*/
