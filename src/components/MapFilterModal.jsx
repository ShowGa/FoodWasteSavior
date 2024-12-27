import React, { useState, useRef } from "react";
import { Navigate } from "react-router-dom";
// mapbox
import { Map } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// icons
import { IoArrowBackCircle, IoLocationOutline } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
// zustand
import useAuthUserPositionStore from "../zustand/useAuthUserPosition";
// react-hot-toast
import toast from "react-hot-toast";
// service
import MapService from "../service/MapBoxService";
import AddressService from "../service/AddressService";

const MapFilterModal = ({ setShowFilterModal }) => {
  const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

  // useRef for map
  const mapRef = useRef(null);

  const { userPosition, loginSetUserPosition } = useAuthUserPositionStore();

  if (!userPosition) {
    toast.error("請先登入!");
    return <Navigate to="/user-login" />;
  }

  // optimize for address search
  const [canSearch, setCanSearch] = useState(false);
  // for address search
  const [address, setAddress] = useState("");
  // backend store position data
  const [positionData, setPositionData] = useState(
    userPosition || {
      longitude: 121.5654,
      latitude: 25.033,
    }
  );

  const handleAddressSubmit = () => {
    if (userPosition === positionData) {
      toast.error("請先更改位置資訊!");
      return;
    }

    AddressService.getAddressByPosition(positionData)
      .then((res) => {
        loginSetUserPosition(res.data.data);
        setShowFilterModal(false);
        toast.success("成功儲存新位置資訊!");
        // timeout 1 second to reload page
        setTimeout(() => {
          window.location.reload();
        }, 800);
      })
      .catch((err) => {
        const message =
          err.response?.data.message ||
          "糟糕!伺服器似乎出現了問題，請聯絡客服。";
        toast.error(message);
        console.log(err);
      });
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
    setCanSearch(true);
  };

  // map fly to
  const handleFlyTo = (longitude, latitude) => {
    mapRef.current.flyTo({
      center: [longitude, latitude],
      speed: 1,
      zoom: 14,
      curve: 1,
    });
  };

  // address search service
  const handleAddressSearch = () => {
    if (address.length < 2) {
      toast.error("請輸入正確的城市名!");
      return;
    }

    if (!canSearch) {
      toast.error("請先輸入或修改城市名!");
      return;
    }

    MapService.getCompleteLocation(address)
      .then((res) => {
        const longitude = res.data.features[0].center[0];
        const latitude = res.data.features[0].center[1];

        handleFlyTo(longitude, latitude);
        setPositionData({
          longitude: longitude,
          latitude: latitude,
        });
        setCanSearch(false);
        toast.success("成功找到位置資訊，請記得按下確定鍵完成更改!");
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
      <div className="flex flex-col gap-6 bg-white px-4 py-6 rounded-lg shadow-md w-full max-w-[30rem] relative">
        <button onClick={() => setShowFilterModal(false)}>
          <IoArrowBackCircle className="absolute top-3 right-3 text-4xl hover:text-red-700" />
        </button>

        <div className="text-center">
          <p className="text-lg font-bold">選擇預設地理位置</p>
        </div>

        <div className="h-[20rem] max-md:h-[13rem] rounded-lg overflow-hidden relative">
          <Map
            ref={mapRef}
            initialViewState={{
              longitude: userPosition?.longitude || 121.5654,
              latitude: userPosition?.latitude || 25.033,
              zoom: 14,
            }}
            style={{ width: "100%", height: "100%" }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxAccessToken={MAPBOX_TOKEN}
            onMove={(evt) =>
              setPositionData({
                longitude: evt.viewState.longitude,
                latitude: evt.viewState.latitude,
              })
            }
          ></Map>

          {/* user middle position */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -100%)",
              zIndex: 1000,
              fontSize: "1.5rem",
              // animation: "pulse 2s infinite",
            }}
          >
            <FaMapMarkerAlt className="text-red-500 text-4xl" />
          </div>
        </div>

        {/* search bar */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 border-2 border-gray-300 rounded-full py-2 px-4">
            <LuSearch
              className="text-2xl cursor-pointer text-gray-500"
              onClick={handleAddressSearch}
            />
            <input
              type="text"
              className="flex-1 outline-none placeholder:text-center placeholder:ml-[2.25rem]"
              placeholder="請輸入城市名"
              value={address}
              onChange={(e) => handleAddressChange(e)}
              // 按下確認鍵後搜尋
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleAddressSearch();
                }
              }}
            />
          </div>
        </div>

        <div>
          <button
            className="bg-primary w-full text-white px-4 py-2 rounded-full"
            onClick={handleAddressSubmit}
          >
            儲存資訊
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapFilterModal;
