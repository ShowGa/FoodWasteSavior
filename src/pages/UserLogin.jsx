import React, { useEffect } from "react";
// react router dom
import { Link, useNavigate } from "react-router-dom";
// Assets
import { shoppingModify, Logobg } from "../assets";

import { IoLogoApple } from "react-icons/io5";
// material UI
import { TextField, Button } from "@mui/material";
// components
import GoogleOAuth from "../components/GoogleOAuth";
// zustand
import useAuthUserStore from "../zustand/useAuthUser";

const UserLogin = () => {
  const { authUser } = useAuthUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (authUser) {
      navigate("/search");
    }
  }, []);

  return (
    <div>
      {/* logo */}
      <div className="absolute top-5 right-10 z-50">
        <img src={Logobg} alt="logo" className="w-16 h-16" />
      </div>

      <div className="flex h-screen">
        {/* Image Container */}
        <section className="flex-1 max-md:hidden">
          <div className="img_container">
            <img src={shoppingModify} alt="shoppingModify" />
          </div>
        </section>

        {/* Form Container */}
        <section className="flex justify-center items-center flex-1 h-full">
          <div className="form_container w-full max-w-[20rem]">
            <h2 className="text-3xl font-extrabold">使用者登入</h2>
            <span className="text-sm text-gray-400">使用外部驗證登入</span>

            {/* OAuth */}
            <div className="flex flex-col gap-4 my-4">
              <GoogleOAuth />
              <button className="c-OAuth_btn">
                <IoLogoApple className="text-2xl" />
                <span>使用 Apple 登入</span>
              </button>
            </div>

            {/* Divider */}
            <div className="p-divider">
              <div className="p-divider_line"></div>
              <span>或</span>
              <div className="p-divider_line"></div>
            </div>

            {/* Form */}
            <form className="flex flex-col gap-4 mt-4">
              {/* material UI */}
              <TextField id="email" label="Email" variant="outlined" />
              <TextField id="password" label="Password" variant="outlined" />

              {/* material UI */}
              <Button variant="contained" color="success">
                登入
              </Button>
            </form>

            {/* Forgot Password & Create an Account */}
            <div className="flex flex-col gap-1 mt-4 text-sm">
              {/* <div>
                <span>忘記密碼? </span>
                <a className="text-blue-500 hover:underline" href="#">
                  重設密碼
                </a>
              </div> */}
              <div>
                <span>沒有帳號? </span>
                <Link
                  className="text-blue-500 hover:underline"
                  to="/user-signup"
                >
                  註冊
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserLogin;

// form input
/*
<div className="input_container">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className=""/>
              </div>

              <div className="input_container">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
              </div>
*/
