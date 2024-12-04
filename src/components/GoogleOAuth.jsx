import React from "react";
// react icons
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import app from "../firebase/firebase";

// zustand
import useAuthUserStore from "../zustand/useAuthUser";

const GoogleOAuth = () => {
  const auth = getAuth(app);

  // zustand
  const { loginSetAuthUser } = useAuthUserStore();

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const resultFromFirebase = await signInWithPopup(auth, provider);

      const data = {
        userName: resultFromFirebase.user.displayName,
        email: resultFromFirebase.user.email,
        avatar: resultFromFirebase.user.photoURL,
      };

      // modify this later
      loginSetAuthUser(data);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button className="c-OAuth_btn" onClick={handleGoogleSignIn}>
      <FcGoogle className="text-xl" />
      <span>Continue with Google</span>
    </button>
  );
};

export default GoogleOAuth;
