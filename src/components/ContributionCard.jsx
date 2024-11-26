import React from "react";

const ContributionCard = ({ state }) => {
  return (
    // 幫我加入 shadow
    <div className="flex flex-col flex-1 items-center gap-6 border border-gray-200 rounded-lg p-4 max-w-[20rem] w-full shadow-md">
      <h3 className="text-2xl">{state.title}</h3>
      {state.icon}
      <div className="text-center">
        <p className="font-bold">{state.number}</p>
        <p className="text-sm text-gray-500">{state.unit}</p>
      </div>
    </div>
  );
};

export default ContributionCard;

/*

========== todo ==========
1. RWD

*/
