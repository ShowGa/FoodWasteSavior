import React, { useEffect, useState, useRef } from "react";
// components
import ContributionCard from "../components/ContributionCard";
import ProfileFuntionCard from "../components/ProfileFuntionCard";
// zustand
import useAuthUserStore from "../zustand/useAuthUser";
// assets
import { img1 } from "../assets";
// react icons
import { FaMoneyBill } from "react-icons/fa";
import { IoBag } from "react-icons/io5";

// service
import OrderService from "../service/OrderService";
import UserService from "../service/UserService";
import UploadImgService from "../service/UploadImgService";
// toast
import toast from "react-hot-toast";

const CheckerTag = ({ isvalid, label }) => {
  return (
    <>
      {/* <div
        className={`flex justify-center items-center gap-2 border border-gray-300 rounded-full px-2 py-1 ${
          isvalid ? "bg-green-500" : "bg-red-500"
        } transition-all duration-500`}
      >
        <p className="text-sm text-gray-100 font-bold">{label}</p>
      </div> */}

      <div className="flex items-center gap-2">
        {/* dot */}
        <div
          className={`w-2 h-2 rounded-full ${
            isvalid ? "bg-green-500" : "bg-red-500"
          }`}
        ></div>
        {/* label */}
        <p className="text-sm text-black font-bold">{label}</p>
      </div>
    </>
  );
};

const UserProfile = () => {
  // image input ref
  const imgInputRef = useRef(null);

  // zustand
  const { authUser, loginSetAuthUser } = useAuthUserStore();

  const [userProfileForm, setUserProfileForm] = useState(authUser);
  const [userContribution, setUserContribution] = useState(null);
  const [showTag, setShowTag] = useState(false);
  const [inputValidation, setInputValidation] = useState({
    minLength: true,
    noSpace: true,
    noSymbol: true,
  });

  // image upload
  const [isLoading, setIsLoading] = useState(false);
  const [imgFile, setImgFile] = useState(null);
  const [imgPreview, setImgPreview] = useState(null);

  // contribution
  const contributionState = [
    {
      title: "拯救了",
      icon: <IoBag className="text-6xl text-orange-700" />,
      number: userContribution?.orderAmounts,
      unit: "袋原本要被丟掉的美食",
    },
    {
      title: "省下的錢",
      icon: <FaMoneyBill className="text-6xl text-green-700" />,
      number: userContribution?.savedMoney,
      unit: "元",
    },
  ];

  // image input change => set img file
  const handleImgInputChange = (e) => {
    setImgFile(e.target.files[0]);
  };

  // updaload image to cloudinary
  const handleUploadImg = () => {
    const fileName = new Date().getTime() + imgFile.name;

    UploadImgService.uploadImg(imgFile, fileName)
      .then((res) => {
        const imgUrl = res.data.secure_url;
        setImgPreview(imgUrl);
        // this is for update user profile
        setUserProfileForm((prev) => ({ ...prev, avatarUrl: imgUrl }));
        toast.success("變更完成，請記得按下儲存變更!");
      })
      .catch((err) => {
        toast.error("上傳失敗，請稍後再試!");
        const message =
          err.response?.data.message ||
          "糟糕!伺服器似乎出現了問題，請聯絡客服。";
        console.log(err);
      });
  };

  const handleGetUserContribution = () => {
    OrderService.getUserContribution(authUser.userId)
      .then((res) => {
        const contribution = res.data.data;
        setUserContribution(contribution);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdateUserProfile = (e) => {
    e.preventDefault();

    if (userProfileForm === authUser) {
      toast.error("請先修改個人資料");
      return;
    }

    if (!inputValidation.minLength || !inputValidation.noSpace) {
      toast.error("資料格式不符合需求!");
      return;
    }

    UserService.updateUserProfile(userProfileForm)
      .then((res) => {
        const userProfile = res.data.data;
        loginSetAuthUser(userProfile);
        setUserProfileForm(userProfile);
        toast.success("更新個人資料成功");
        setShowTag(false);
      })
      .catch((err) => {
        const message =
          err.response?.data.message ||
          "糟糕!伺服器似乎出現了問題，請聯絡客服。";
        toast.error(message);
        console.log(err);
      });
  };

  const handleChangeUserProfileForm = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      toast.error("電子信箱無法修改");
      return;
    }

    setShowTag(true);
    handleCheckInputValidation(e);
    setUserProfileForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckInputValidation = (e) => {
    const value = e.target.value;

    const minLength = value.length >= 6 && value.length <= 16;
    const noSpace = !value.includes(" ");
    const noSymbol = /^[a-zA-Z0-9\u4e00-\u9fa5]+$/.test(value);
    setInputValidation({ minLength, noSpace, noSymbol });
  };

  useEffect(() => {
    handleGetUserContribution();
  }, []);

  useEffect(() => {
    if (imgFile) {
      handleUploadImg();
    }
  }, [imgFile]);

  return (
    <main className="px-[4rem] py-[1.5rem]">
      <div className="flex flex-col gap-8 p-[1.5rem] min-h-screen">
        {/* state*/}
        <section>
          <h1 className="text-center text-4xl font-bold mb-4">
            地球因為你而更美麗
          </h1>
          {/* state card */}
          <div className="flex justify-center flex-wrap gap-6">
            {contributionState.map((state, index) => (
              <ContributionCard state={state} key={index} />
            ))}
          </div>
        </section>

        {/* function */}
        <section>
          <h1 className="text-center text-4xl font-bold mb-4">功能選項</h1>

          <div className="flex justify-center flex-wrap gap-6">
            <ProfileFuntionCard />
          </div>
        </section>

        {/* profile */}
        <section className="flex flex-col justify-center items-center gap-4 mt-[5rem]">
          <h1 className="text-4xl font-bold">個人資料</h1>
          <form
            className="flex flex-col gap-8 w-full max-w-2xl"
            onSubmit={handleUpdateUserProfile}
          >
            <div className="flex justify-center">
              <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden">
                <img
                  src={imgPreview || userProfileForm.avatarUrl}
                  alt="使用者頭像"
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => imgInputRef.current.click()}
                />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {/* upload img */}
              <div className="flex flex-col gap-2">
                <input
                  type="file"
                  accept="image/*"
                  ref={imgInputRef}
                  hidden
                  onChange={handleImgInputChange}
                />
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="text-xl">姓名</h2>
                <input
                  type="text"
                  className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="username"
                  value={userProfileForm.username}
                  onChange={handleChangeUserProfileForm}
                />
                {showTag && (
                  <div className="flex items-center gap-2">
                    <CheckerTag
                      isvalid={inputValidation.minLength}
                      label="6 ~ 16個字元"
                    />
                    <CheckerTag
                      isvalid={inputValidation.noSpace}
                      label="沒有空格"
                    />
                    <CheckerTag
                      isvalid={inputValidation.noSymbol}
                      label="沒有特殊符號"
                    />
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl">電子信箱</h2>
                <input
                  type="email"
                  className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="email"
                  disabled
                  value={userProfileForm.email}
                  onChange={handleChangeUserProfileForm}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-secondaryTheme text-white px-6 py-2 rounded-lg hover:bg-secondaryThemeHover transition-colors"
                >
                  儲存變更
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};

export default UserProfile;

/* 

============= note =============
1. move the order to separate button


========== todo ==========
1. Contribution 的資料要計算公式，並顯示在 user profile 上

*/
