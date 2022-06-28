import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Write = () => {
  const logOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <p>this is from write</p>
      <button onClick={() => logOut()}>Log Out</button>
    </div>
  );
};

export default Write;
