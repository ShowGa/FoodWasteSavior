import React, { useState } from "react";
// mui
import Rating from "@mui/material/Rating";
// components
import ToggleBtn from "./ToggleBtn";

const review = ["給的超大方", "食物美味", "服務態度好", "環境舒適", "價格超值"];

const ReviewStep2 = () => {
  const [rating, setRating] = useState(5);

  return (
    <section className="mt-4 py-[1rem] px-[1.75rem] border border-gray-300 rounded-lg shadow-md">
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-xl font-bold">您想給店家的評分?</h1>
          {/*修改星星之間的距離*/}
          <div className="mt-3">
            <Rating
              value={rating}
              name="half-rating"
              precision={1}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
              sx={{ fontSize: 30 }}
            />
          </div>
        </div>

        <div>
          <h1 className="text-xl font-bold">您對店家的評價?</h1>
          <div className="flex flex-wrap gap-3">
            {review.map((item) => (
              <ToggleBtn review={item} />
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 border-dashed my-4"></div>

      <div className="text-center mt-4">
        <button className="px-4 py-2 rounded-full w-full font-bold  transition-all duration-300 text-white bg-secondaryTheme hover:bg-secondaryThemeHover">
          評價
        </button>
      </div>
    </section>
  );
};

export default ReviewStep2;
