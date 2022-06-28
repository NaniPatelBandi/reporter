import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <p>this is login page</p>
      <p>
        to write news click <Link to="/write">HERE</Link>
      </p>
    </div>
  );
};

export default Login;
