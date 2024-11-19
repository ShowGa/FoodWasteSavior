import React from "react";
// Assets
import { img3 } from "../assets";
// react icons
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";
// material UI
import { TextField, Button } from "@mui/material";

const UserLogin = () => {
  return (
    <div>
      {/* logo */}
      <div className="absolute top-5 right-10 z-50">
        {/* <img src={logo} alt="logo" /> */}
        <h1 className="text-3xl font-extrabold">Logo</h1>
      </div>

      <div className="flex h-screen">
        {/* Image Container */}
        <section className="flex-1 max-md:hidden">
          <div className="img_container">
            <img src={img3} alt="handsome man" />
          </div>
        </section>

        {/* Form Container */}
        <section className="flex justify-center items-center flex-1 h-full">
          <div className="form_container w-full max-w-[20rem]">
            <h2 className="text-3xl font-extrabold">User Sign Up</h2>
            <span className="text-sm text-gray-400">
              Please enter your details
            </span>

            {/* OAuth */}
            <div className="flex flex-col gap-4 my-4">
              <button className="p-OAuth_btn">
                <FcGoogle className="text-xl" />
                <span>Continue with Google</span>
              </button>
              <button className="p-OAuth_btn">
                <IoLogoApple className="text-2xl" />
                <span>Continue with Apple</span>
              </button>
            </div>

            {/* Divider */}
            <div className="p-divider">
              <div className="p-divider_line"></div>
              <span>Or</span>
              <div className="p-divider_line"></div>
            </div>

            {/* Form */}
            <form className="flex flex-col gap-4 mt-4">
              {/* material UI */}
              <TextField id="email" label="Email" variant="outlined" />
              <TextField id="password" label="Password" variant="outlined" />

              {/* material UI */}
              <Button variant="contained" color="success">
                Sign Up
              </Button>
            </form>

            {/* Forgot Password & Create an Account */}
            <div className="flex flex-col gap-1 mt-4 text-sm">
              <div>
                <span>Already have an account? </span>
                <a className="text-blue-500 hover:underline" href="/user-login">
                  Log In
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserLogin;
