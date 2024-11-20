import React from "react";
// css
import "./css/coolSearchBar1.css";

const SearchBarCool1 = () => {
  return (
    <div className="c-searchBarCool1-flexbox">
      <div className="c-searchBarCool1-search">
        <div>
          <input type="text" placeholder="Search . . ." required />
        </div>
      </div>
    </div>
  );
};

export default SearchBarCool1;
