import React from "react";

const InstructionSwiperContent = ({ instructionContent }) => {
  return (
    <div className="c-instruction-steps_item_container max-lg:flex-col">
      <div className="relative w-[30rem] h-[30rem]">
        <div className="absolute w-[25rem] top-0 left-0">
          <img src={`${instructionContent.imgs.img1}`} alt="" />
        </div>
        <div className="absolute w-[12rem] right-0 bottom-0">
          <img src={`${instructionContent.imgs.img2}`} alt="" />
        </div>
      </div>

      <div className="flex flex-col gap-4 max-lg:items-center">
        <h1
          className="text-white text-xl font-extrabold"
          style={{
            color: "rgb(255, 251, 155)",
          }}
        >
          HOW TO USE THE APP
        </h1>
        <h3 className="text-white text-3xl font-bold">
          {instructionContent.title}
        </h3>
        <p className="text-sm text-white/80">
          {instructionContent.description}
        </p>
      </div>
    </div>
  );
};

export default InstructionSwiperContent;

/*
       <div className="c-instruction-steps_item_img_container">
        <img
          className="absolute w-10 h-10 object-cover"
          src={`${instructionContent.imgs.img1}`}
          alt=""
        />
        <img
          className="absolute w-10 h-10 object-cover"
          src={`${instructionContent.imgs.img2}`}
          alt=""
        />
      </div>

      <div className="c-instruction-steps_item_content">
        <h3 className="text-2xl font-bold">{instructionContent.title}</h3>
        <p className="text-sm">{instructionContent.description}</p>
      </div>
*/
