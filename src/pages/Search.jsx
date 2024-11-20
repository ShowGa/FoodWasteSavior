import React from "react";
// css
import "./css/pagesCSS.css";

const Search = () => {
  return (
    <main>
      <div className="h-screen flex flex-row">
        <section className="c-left-side basis-[63%] p-[1.5rem] bg-red-200">
          <div className="bg-white w-full h-full"></div>
        </section>

        <section className="c-right-side basis-[37%] bg-blue-200">
          <div className="bg-green-300 w-full h-[10rem]">Map</div>
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
3. Map height mechanism


============= Adjust later ==============
1.

*/
