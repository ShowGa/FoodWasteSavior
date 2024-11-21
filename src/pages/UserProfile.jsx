import React from "react";

const UserProfile = () => {
  return (
    <main className="px-[4rem] py-[1.5rem]">
      <div className="flex flex-col gap-8 p-[1.5rem] min-h-screen bg-red-200">
        {/* order */}
        <div>
          <h1 className="text-4xl">你的訂單</h1>
          {/* order card */}
        </div>

        {/* state*/}
        <div>
          <h1 className="text-4xl">地球因為你而更美麗</h1>
          {/* state card */}
        </div>

        {/* profile */}
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-4xl">個人資料</h1>
          <div className="">
            <div>
              <img src="" alt="" />
            </div>

            <div className="">
              <div>
                <h2>姓名</h2>
                <input type="text" />
              </div>
              <div>
                <h2>電子信箱</h2>
                <input type="email" />
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserProfile;

/* 

=========== Create the order card ===========

=========== Create the state card ===========


*/
