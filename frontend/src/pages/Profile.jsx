import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Profile.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditIcon from "@mui/icons-material/Edit";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Axios from "../axiosInstance";
export default function Profile() {
  const [profile, setprofile] = useState();
  const update = async () => {
    const changeurl = await Axios.patch("/editProfile", {
      profile_url: url,
    });
  };
  const getprofile = async () => {
    const res = await Axios.get("/profile");
    setprofile(res.data);
  };
  useEffect(() => {
    getprofile();
  }, []);

  const [url, seturl] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div className="profile">
      <div className="Head">
        <p className="LineProfile"></p>
        <p className="TextProfile">Profile</p>
        <p className="LineProfile"></p>
      </div>
      <div className="profileDetail">
        <div onClick={() => handleOpen()}>
          {profile?.profile_url ? (
            <div className="editPic">
              <img className="profpic" src={profile.profile_url} />
            </div>
          ) : (
            <div className="editPic">
              <AccountCircleIcon sx={{ color: "#ff9494", fontSize: "200px" }} />
            </div>
          )}

          <button className="edit">
            <EditIcon sx={{ color: "black", fontSize: "100px" }} />
          </button>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Edit profile picture
            </Typography>
            <TextField
              label="img_url"
              variant="outlined"
              value={url}
              onChange={(e) => seturl(e.target.value)}
            />
            <Button
              sx={{
                marginLeft: "10px",
              }}
              variant="contained"
              color="info"
              onClick={update}
            >
              Submit change
            </Button>
          </Box>
        </Modal>
        <p>
          nickname <EditIcon />
        </p>  
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eos eaque nulla blanditiis, veniam iste incidunt id aspernatur facilis sint recusandae maxime suscipit dolorem unde ex aut. Dolor, cum magni!
          <EditIcon />
        </p>
        {/*  */}
      </div>
    </div>
  );
}
