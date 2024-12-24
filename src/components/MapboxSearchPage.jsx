import React, { useState } from "react";
// mapbox
import { Map, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// icons
import { FaMapMarkerAlt } from "react-icons/fa";
// toast
import toast from "react-hot-toast";
// mui
import { Slider } from "@mui/material";

const StoreMapMarker = ({ storeData }) => {
  return (
    <div
      style={{
        width: "2.5rem",
        height: "2.5rem",
        borderRadius: "50%",
        border: "2px solid orange",
        position: "relative",
      }}
      className="map-marker hover:scale-110 transition-all duration-300"
    >
      <img
        src={storeData.storeCoverImage}
        alt=""
        className="w-full h-full object-cover rounded-full"
      />

      {/* store map card */}
      {/* <div className="flex items-center justify-start absolute bottom-[-7rem] w-[20rem] h-[5rem] p-3 rounded-xl border-2 border-gray-300 bg-white">
        <div className=" w-[3rem] h-[3rem]">
          <img
            src={storeData.storeCoverImage}
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h2>{storeData.storeName}</h2>
      </div> */}
    </div>
  );
};

// slider sx style
const sliderSx = {
  "& .MuiSlider-thumb": {
    color: "orange",
    width: "1rem",
    height: "1rem",
    "&:hover": {
      boxShadow: "0 0 0px 5px rgba(230, 153, 0, 0.522)",
    },
  },
  "& .MuiSlider-track": {
    color: "orange",
  },
  "& .MuiSlider-rail": {
    color: "orange",
  },
  "& .MuiSlider-active": {
    color: "orange",
  },
  // 修改刻度顏色
  "& .MuiSlider-mark": {
    display: "none",
  },
  // 修改刻度標籤顏色
  "& .MuiSlider-markLabel": {
    color: "#FF5722", // 刻度標籤顏色 (深橘色)
  },
};

const MapboxSearchPage = ({
  searchStoreData,
  setSearchStoreData,
  userPositionForSearch,
  setUserPositionForSearch,
  fetchStoreDataByPosition,
}) => {
  // write drag location for select the positon logic later => drag, radius
  // write buton for search (fetch the store data) the store with animation

  // onmoving state => for animation
  const [onMoving, setOnMoving] = useState(false);
  // check is the position changed
  const [isPositionChanged, setIsPositionChanged] = useState(false);

  const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

  // drag logic => change map viewstate by userPositionForSearch state
  const handleDragLogic = (evt) => {
    const { longitude, latitude } = evt.viewState;
    setUserPositionForSearch({ ...userPositionForSearch, longitude, latitude });
    setOnMoving(true);
    setIsPositionChanged(true);
  };

  // adjust the radius
  const handleRadiusChange = (evt) => {
    const radius = evt.target.value;
    setUserPositionForSearch({
      ...userPositionForSearch,
      radius: radius * 1000,
    });
  };

  // search button click logic
  const handleSearchButtonClick = () => {
    if (!isPositionChanged) {
      toast.error("請先拖拽地圖，選擇位置");
      return;
    }
    fetchStoreDataByPosition();
    setIsPositionChanged(false);
  };

  return (
    <>
      <Map
        initialViewState={{
          longitude: userPositionForSearch.longitude,
          latitude: userPositionForSearch.latitude,
          zoom: 14,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
        onMove={handleDragLogic}
        onMoveEnd={() => {
          setOnMoving(false);
        }}
      >
        {/* Marker of middle point */}
        {searchStoreData.length > 0 &&
          searchStoreData.map((storeData) => (
            <Marker
              longitude={storeData.longitude}
              latitude={storeData.latitude}
              anchor="center"
            >
              <StoreMapMarker storeData={storeData} />
            </Marker>
          ))}
      </Map>

      {/* user middle position */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1000,
          fontSize: "1.5rem",
          // animation: "pulse 2s infinite",
        }}
      >
        <FaMapMarkerAlt className="text-red-500 text-4xl" />
      </div>

      {/* search button */}
      <div
        className={`c-mapbox-search-page_search-btn ${
          isPositionChanged ? "c-effect" : ""
        }`}
        onClick={handleSearchButtonClick}
      >
        <button
          className={`rounded-full p-2 font-bold text-black ${
            isPositionChanged ? "bg-white w-20" : "bg-[#414141] w-10"
          }`}
          style={{
            transition: "all 0.3s ease-in-out",
          }}
        >
          {isPositionChanged ? "Search" : ""}
        </button>
      </div>

      {/* radius slider */}

      <div className="absolute top-8 left-3 max-h-[10rem] h-full bg py-6 px-1 rounded-full bg-[#414141]">
        <Slider
          aria-label="Temperature"
          defaultValue={30}
          // getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => `方圓 : ${value} km內`}
          shiftStep={5}
          step={1}
          marks
          min={1}
          max={5}
          orientation="vertical"
          sx={sliderSx}
          value={userPositionForSearch.radius / 1000}
          onChange={(evt) => {
            handleRadiusChange(evt);
            setIsPositionChanged(true);
          }}
        />
      </div>
    </>
  );
};

export default MapboxSearchPage;
