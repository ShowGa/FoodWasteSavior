import React, { useState, useEffect } from "react";
// components
import DiscoverListCard from "../components/DiscoverListCard";
// service
import FavoriteService from "../service/FavoriteService";
// toast
import toast from "react-hot-toast";
// zustand
import useAuthUserStore from "../zustand/useAuthUser";

const Favorite = () => {
  const [favoriteList, setFavoriteList] = useState([]);
  const { authUser } = useAuthUserStore();

  const handleGetFavoriteList = () => {
    FavoriteService.getFavoriteList(authUser.userId)
      .then((res) => {
        setFavoriteList(res.data.data);
      })
      .catch((err) => {
        const message =
          err.response?.data.message ||
          "糟糕!伺服器似乎出現了問題，請聯絡客服。";
        toast.error(message);
        console.log(err);
      });
  };

  useEffect(() => {
    handleGetFavoriteList();
  }, []);

  return (
    <main className="p-[1.5rem]">
      <div className="flex flex-col p-[1.5rem] min-h-screen">
        {/* title */}
        <div className="flex justify-start items-center text-[1.5rem]">
          <h1 className="text-4xl">口袋名單</h1>
        </div>

        {/* card */}
        <div className="flex flex-wrap justify-start items-center gap-4 mt-8 max-md:flex-col max-md:gap-4">
          {favoriteList.map((item) => (
            <DiscoverListCard
              key={item.packageId}
              packageData={item}
              setFavoriteList={setFavoriteList}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Favorite;

/*
============== card css ================
1. max w h
2. min w h
3. flex-1

*/
