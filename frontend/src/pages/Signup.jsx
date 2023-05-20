import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Signup.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
export default function Signup() {
  const [user, setUser] = useState();
  const [pass, setPass] = useState();
  const [secondPass, setSecondPass] = useState();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (pass === secondPass && user!='' && pass!=''&&secondPass!='') {
      navigate("/", { state: { user: user, pass: pass } });
    } else {
      toast.error("Password not match");
    }
  };
  return (
    <div>
      <div className="Head">
        <p className="Line"></p>
        <p className="Text">Sign up</p>
        <p className="Line"></p>
      </div>
      <div className="Signupbox">
        <form onSubmit={handleSubmit}>
          <label className="Abovelog" for="username">
            Username: <br />
            <input
              className="log"
              type="text"
              id="username"
              value={user}
              placeholder="Type your username here"
              required
              onChange={(event) => setUser(event.target.value)}
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
              value={pass}
              required
              placeholder="Type your password here"
              onChange={(event) => setPass(event.target.value)}
            />
          </label>
          <br />
          <label className="Abovelog" for="confirmPassword">
            Confirm Password:
            <br />
            <input
              className="log"
              type="password"
              id="confirmPassword"
              value={secondPass}
              required
              placeholder="Type your password here"
              onChange={(event) => setSecondPass(event.target.value)}
            />
          </label>
          <br />
          <div className="ButtonPosition">
            <button
              className="back"
              onClick={() => {
                navigate('/');
              }}
            >
              <div className="arrange">
                <ArrowBackIcon /> Log in
              </div>
            </button>

            <input className="Signup" type="submit" value="Signup" />
          </div>
        </form>
      </div>
    </div>
  );
}
