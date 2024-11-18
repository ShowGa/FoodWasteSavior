import React from "react";

// No data need to fetch from database
const Home = () => {
  return (
    <div>
      {/* Hero section */}
      <section className="h-[40rem] bg-[rgb(0,97,95)]">
        {/* for background image => absolute */}
        <div className="absolute top-0 left-0 w-full h-full"></div>
        <div className="flex flex-col justify-end items-center h-full text-white pb-20 px-3">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl font-bold text-center">
              Help the world saving food from waste
            </h1>

            <div className="flex flex-row gap-4 mt-6">
              <div className="btn">
                <a>使用者登入</a>
              </div>
              <div className="btn">
                <a>企業註冊</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section>introduction section</section>

      {/* Instruction Section */}
      <section>Instruction section</section>

      {/* Bussiness Section */}
      <section>Bussiness section</section>

      {/* Footer Section */}
      <section>footer</section>
    </div>
  );
};

export default Home;
