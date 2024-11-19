import React from "react";
import { motion } from "framer-motion";
// css
import "./css/pagesCSS.css";
// swiper
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
// components
import InstructionSwiperContent from "../components/InstructionSwiperContent";
import IntroductionCard from "../components/introductionCard";

// instruction content
import { instructionContent } from "../constants/instructionContent";
import introductionContent from "../constants/introductionContent";
import { fadeIn } from "../constants/motionAnimation";

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
      <section className="bg-secondary">
        <div className="p-introduction_title_container text-center max-w-[50rem] mx-auto pt-20">
          <h2 className="text-2xl text-primary font-bold pb-4">Why Choose</h2>
          <h2 className="text-4xl font-bold pb-4">吃不了兜著走</h2>
        </div>

        <div className="pt-10 pb-20 px-40 max-lg:px-10">
          <motion.div
            className="flex flex-row flex-wrap justify-evenly gap-4"
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {introductionContent.map((item, index) => (
              <IntroductionCard
                key={index}
                icon={item.icon}
                title={item.title}
                content={item.content}
              />
            ))}
          </motion.div>
        </div>
      </section>

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

// for introduction content
/*
<p className="text-xl pb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos.
          </p>
          <span className="text-sm text-secondaryText">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quis
            veritatis sapiente dolorum quo facilis voluptatum assumenda quae.
            Eos nisi voluptates nobis fugiat iste accusamus! Suscipit nostrum
            quod dicta sunt.
          </span>
*/
