import React from "react";
// react router dom
import { useNavigate } from "react-router-dom";

// react icons
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import app from "../firebase/firebase";

// zustand
import useAuthUserStore from "../zustand/useAuthUser";
import useAuthUserJwt from "../zustand/useAuthUserJwt";
import useAuthUserPosition from "../zustand/useAuthUserPosition";

// service
import AuthService from "../service/AuthService";

// react hot toast
import toast from "react-hot-toast";

const GoogleOAuth = () => {
  const navigate = useNavigate();
  const auth = getAuth(app);

  // zustand
  const { loginSetAuthUser } = useAuthUserStore();
  const { loginSetJwt } = useAuthUserJwt();
  const { loginSetUserPosition } = useAuthUserPosition();

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const resultFromFirebase = await signInWithPopup(auth, provider);

      const idToken = await resultFromFirebase.user.getIdToken();

      AuthService.firebaseGoogleOAuth({ idToken })
        .then((response) => {
          const { userPosition, jwt, ...userInfo } = response.data.data;

          loginSetAuthUser(userInfo);
          loginSetJwt(jwt);
          loginSetUserPosition(userPosition);

          // loginSetAuthUser();
          toast.success("登入成功 !");
          // navigate to /
          navigate("/");
        })
        .catch((error) => {
          const message = error.response?.data.message || error;
          toast.error(message);

          console.log(message);
        });
    } catch (error) {
      toast.error("糟糕!出現了問題。請檢查網路是否連線，或稍後再試。");
      console.log(error);
    }
  };

  return (
    <button className="c-OAuth_btn" onClick={handleGoogleSignIn}>
      <FcGoogle className="text-xl" />
      <span>使用 Google 登入</span>
    </button>
  );
};

export default GoogleOAuth;
