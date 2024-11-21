import React from "react";
// components
import CollectionCard from "../components/CollectionCard";

const Favorite = () => {
  return (
    <main className="p-[1.5rem]">
      <div className="flex flex-col p-[1.5rem] min-h-screen bg-red-200">
        {/* title */}
        <div className="flex justify-start items-center text-[1.5rem]">
          <h1 className="text-4xl">口袋名單</h1>
        </div>

        {/* card */}
        <div className="flex flex-wrap justify-start items-center gap-4 mt-8">
          <CollectionCard />
          <CollectionCard />
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
