import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Profile.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditIcon from "@mui/icons-material/Edit";
export default function Profile() {
  const printthing = () => {
    console.log("gogogo");
  };
  return (
    <div className="profile">
      <div className="Head">
        <p className="LineProfile"></p>
        <p className="TextProfile">Profile</p>
        <p className="LineProfile"></p>
      </div>
      <div className="profileDetail">
        <button className="editPic" onClick={() => printthing()}>
          <AccountCircleIcon sx={{ color: "#ff9494", fontSize: "200px" }} />
        </button>
        <div className="edit">
          <EditIcon sx={{ color: "black", fontSize: "150px" }} />
        </div>
        <p>Username</p>
        <p>
          nickname <EditIcon />
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea,
          molestiae sapiente, repellendus nesciunt aut magnam ex odio aliquid
          explicabo soluta quia. Corporis neque reiciendis distinctio vel
          provident accusamus inventore dolorem? <EditIcon />
        </p>
        {/*  */}
      </div>
    </div>
  );
}
