import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import App from "../App";
import "../css/Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Axios from "../axiosInstance";
export default function Login({ changecurrent }) {
  const [userLogin, setUserLogin] = useState("");
  const [userPass, setUserPass] = useState("");
  const navigate = useNavigate();

  const login = async (event) => {
    event.preventDefault();
    const user = await Axios.post("/login", {
      username: userLogin,
      password: userPass,
    });
    if (user.data.success==true) {
      changecurrent("Home");
      navigate("/home");
    }else{
      toast.error(user.data.message);
    }
  };

  const onsignup = (event) => {
    navigate("/signup");
  };
  return (
    <div className="Login">
      <div className="Head">
        <p className="Line"></p>
        <p className="Text">Log in</p>
        <p className="Line"></p>
      </div>
      <div className="Logbox">
        <form onSubmit={login}>
          <label className="Abovelog" for="username">
            Username: <br />
            <input
              className="log"
              type="text"
              id="username"
              value={userLogin}
              required
              placeholder="Type your username here"
              onChange={(event) => setUserLogin(event.target.value)}
            />
          </label>
          <br />
          <label className="Abovelog" for="password">
            Password:
            <br />
            <input
              className="log"
              type="password"
              id="password"
              required
              value={userPass}
              placeholder="Type your password here"
              onChange={(event) => setUserPass(event.target.value)}
            />
          </label>
          <br />
          <div className="ButtonPosition">
            <button className="SignupButton" onClick={onsignup}>
              Sign up
            </button>
            <input className="Submitbutton" type="submit" value="Log in" />
          </div>
        </form>
      </div>
    </div>
  );
}
