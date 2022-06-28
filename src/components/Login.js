import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

// css
import "../css/login.css";
const Login = () => {
  console.log("from login page");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, loading] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("form use effect");
    if (user) navigate("/write");
  }, [user, navigate]);

  const signIn = async (e, email, password) => {
    if (!email || !password) return;
    e.preventDefault();
    try {
      const reporter = await signInWithEmailAndPassword(auth, email, password);
      console.log(reporter.user);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error.message);
      setError("Email or Password is Incorrect");
      setPassword("");
    }
  };
  if (loading)
    return (
      <div className="loadingDiv">
        <p>Loading...</p>
      </div>
    );
  return (
    <div className="loginContainer">
      <div className="error">{error}</div>
      <form>
        <input
          className="loginInput"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your E-mail"
          required
          autoFocus
        />
        <input
          className="loginInput"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Your Password"
          required
        />
        <button
          type="submit"
          className="loginButton"
          onClick={(e) => signIn(e, email, password)}
        >
          LogIn
        </button>
      </form>
    </div>
  );
};

export default Login;
