import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  console.log("from login page");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/write");
  }, [user]);

  const signIn = async (email, password) => {
    try {
      const reporter = await signInWithEmailAndPassword(auth, email, password);
      console.log(reporter.user);
    } catch (error) {
      console.log(error.message);
    }
  };
  if (loading)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Your E-mail"
        required
        autoFocus
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Your Password"
        required
      />
      <button onClick={() => signIn(email, password)}>LogIn</button>
    </div>
  );
};

export default Login;
