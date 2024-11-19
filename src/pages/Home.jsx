import React from "react";
// css
import "./css/pagesCSS.css";
// swiper
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
// components
import InstructionSwiperContent from "../components/InstructionSwiperContent";

// instruction content
import { instructionContent } from "../constants/instructionContent";

// No data need to fetch from database
const Home = () => {
  SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);

  return (
    <div>
      {/* Hero section */}
      <section className="h-[40rem] bg-primary">
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
      <section className="bg-primary py-16 px-40 max-lg:px-10">
        <div className="p-instruction_swiper_container">
          <Swiper
            modules={[Navigation, Pagination, EffectFade, Autoplay]}
            pagination={{ clickable: true }}
            effect="fade"
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {instructionContent.map((item) => (
              <SwiperSlide key={item.id}>
                <InstructionSwiperContent instructionContent={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Bussiness Section */}
      <section>Bussiness section</section>

      {/* Footer Section */}
      <section>footer</section>
    </div>
  );
};

export default Home;

// for introduction
/*
  <div className="title">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-3xl font-bold">Why Choose Us</h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              , quos.
            </p>
          </div>
        </div>
*/
