import React, { useEffect } from "react";
// css
import "./css/pagesCSS.css";
// zustand
import { useHeaderHeightStore } from "../zustand/mapUXMechanismStore";
// components
import StoreCard from "../components/StoreCard";
// images
import { img1, img2, img3 } from "../assets";

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

  return (
    <main>
      <div className="flex flex-row">
        {/* left side */}
        <section className="c-left-side basis-[63%] p-[1.5rem] bg-red-200">
          <div className="flex flex-wrap gap-4 w-full bg-white">
            {storeInfo.map((store, index) => (
              <StoreCard storeInfo={store} key={index} />
            ))}
          </div>
        </section>

        {/* right side */}
        <section className="c-right-side basis-[37%] bg-blue-200">
          <div
            className="sticky bg-green-300 w-full"
            style={{
              top: `${header2Height}px`,
              height: `${mapHeight}px`,
            }}
          >
            Map
          </div>
        </section>
      </div>
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


============= Adjust later ==============
1.

*/
