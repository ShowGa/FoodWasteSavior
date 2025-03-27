import React from "react";
// react router dom
import { Link } from "react-router-dom";
// Assets
import { shoppingModify, Logobg } from "../assets";
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
            <h2 className="text-3xl font-extrabold">用戶註冊</h2>
            <span className="text-sm text-gray-400">請輸入您的詳細資料</span>

            <div className="p-divider">
              <div className="p-divider_line"></div>
              <span className="whitespace-nowrap">註冊</span>
              <div className="p-divider_line"></div>
            </div>

            {/* register */}
            <form className="flex flex-col gap-4 mt-4">
              {/* 修改textfield style為success */}
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                color="success"
              />
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                color="success"
              />

              <Button variant="contained" color="success">
                註冊
              </Button>
            </form>

            {/* Forgot Password & Create an Account */}
            <div className="flex flex-col gap-1 mt-4 text-sm">
              <div>
                <span>已經有帳號，或想使用Google、Apple註冊？</span>
                <Link
                  className="text-blue-500 hover:underline"
                  to="/user-login"
                >
                  登入
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

/*            <div className="p-divider">
              <div className="p-divider_line"></div>
              <span>或</span>
              <div className="p-divider_line"></div>
            </div>

            <form className="flex flex-col gap-4 mt-4">
              <TextField id="email" label="Email" variant="outlined" />
              <TextField id="password" label="Password" variant="outlined" />

              <Button variant="contained" color="success">
                註冊
              </Button>
            </form>
            */
