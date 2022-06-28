import React, { useEffect } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const Write = () => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      return navigate("/");
    }
  }, [user, navigate]);

  const logOut = () => {
    signOut(auth);
  };
  // if (!user) {
  //   navigate("/");
  // }
  return (
    <div>
      <p>this is from write</p>
      <button onClick={() => logOut()}>Log Out</button>
    </div>
  );
};

export default Write;
