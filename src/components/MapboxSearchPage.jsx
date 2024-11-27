import React, { useState } from "react";
// mapbox
import { Map, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapboxSearchPage = () => {
  const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

  return (
    <>
      <Map
        initialViewState={{
          longitude: 121.5654,
          latitude: 25.033,
          zoom: 14,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        {/* Marker of middle point */}
        <Marker longitude={121.5654} latitude={25.033} anchor="center">
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
      </Map>
    </>
  );
};

export default MapboxSearchPage;
