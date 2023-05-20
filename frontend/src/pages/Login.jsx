import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import App from "../App";
import "../css/Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Login({changecurrent}) {
  const [userLogin, setUserLogin] = useState("");
  const [userPass, setUserPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userLogin === "a" && "a" === userPass) {
      changecurrent("Home");
      navigate("/home");
    } else {
      toast.error("Wrong user or password");
    }
  };
  const handleSubmit = async () => {
    
      const response = await Axios.post("/login", {
        userLogin,
        userPass,
      });
      // 3. if success, close modal, and update user information.
      if (response.data.success) {
        setUser({
          username: response.data.data.username,
          email: response.data.data.email,
        });
        handleClose();
        setStatus({
          msg: response.data.msg,
          severity: "success",
        });
      }
    } catch (e) {
      // 4. if fail, show error message, and reset text fields value
      setUsernameOrEmail("");
      setPassword("");
      // check if e are AxiosError
      if (e instanceof AxiosError) {
        // check if e.response exist
        if (e.response)
          return setStatus({
            msg: e.response.data.error,
            severity: "error",
          });
      }
      // if e is not AxiosError or response doesn't exist, return error
      message;
      return setStatus({
        msg: e.message,
        severity: "error",
      });
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
        <form onSubmit={handleSubmit}>
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
