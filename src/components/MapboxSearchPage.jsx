import React, { useState } from "react";
// mapbox
import { Map, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// icons
import { FaMapMarkerAlt } from "react-icons/fa";

const MapboxSearchPage = ({
  searchStoreData,
  setSearchStoreData,
  userPositionForSearch,
  setUserPositionForSearch,
}) => {
  // write drag location for select the positon logic later
  // write buton for search (fetch the store data) the store with animation

  const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

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
          animation: "pulse 2s infinite",
        }}
      >
        <FaMapMarkerAlt />
      </div>
    </>
  );
};

export default MapboxSearchPage;
