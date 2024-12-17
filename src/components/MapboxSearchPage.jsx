import React, { useState } from "react";
// mapbox
import { Map, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// icons
import { FaMapMarkerAlt } from "react-icons/fa";
// toast
import toast from "react-hot-toast";

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
        // mapboxAccessToken={MAPBOX_TOKEN}
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
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "red",
                  borderRadius: "50%",
                  border: "2px solid white",
                }}
              ></div>
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
        <FaMapMarkerAlt />
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
    </>
  );
};

export default MapboxSearchPage;
