import React, { useEffect } from "react";
// css
import "./css/pagesCSS.css";
// zustand
import { useHeaderHeightStore } from "../zustand/mapUXMechanismStore";

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
      <div className="h-screen flex flex-row">
        <section className="c-left-side basis-[63%] p-[1.5rem] bg-red-200">
          <div className="bg-white w-full h-full"></div>
        </section>

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
2. Map position mechanism
3. Map height mechanism --------
  1. create zustand for store the calc data of the mapHeight


============= Adjust later ==============
1.

*/
