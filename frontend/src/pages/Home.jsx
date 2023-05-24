import React from "react";
import "../css/Home.css";
import App from "../App";
import SortIcon from "@mui/icons-material/Sort";
import { useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import Axios from "../axiosInstance";
import { useEffect, useState } from "react";
import { Button, IconButton } from "@mui/material";
export default function Home() {
  const getHome = async () => {
    const homePost = await Axios.get("/getHome");
    setpost(homePost.data.data);
  };

  useEffect(() => {
    getHome();
  }, []);
  const [post, setpost] = useState([]);
  const navigate = useNavigate();
  const seemore = () => {
    navigate("/post");
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const write = () => {
    navigate("/write");
  };
  const deletepost = async (id) => {
    console.log(id);
    const byepost = await Axios.delete("/deletePost", {
      data: { id: id },
    });
    getHome();
  };
  return (
    <div className="Home">
      <div className="Head">
        <p className="Linehome"></p>
        <p className="Text">Home</p>
        <p className="Linehome"></p>
      </div>
      {post.length > 0 && (
        <div>
          <div className="Icon">
            <div className="MakeIconmiddle">
              <div className="changePositionIcon">
                <button className="sortIcon">
                  <SortIcon fontSize="large" onClick={handleClick} />
                </button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    Sort by created date
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleClose}>
                    Sort by updated date
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </div>
          <div className="outerHome">
            <div className="innerHome">
              <div className="firstPost">
                <div className="firstImg">
                  <img
                    style={{
                      objectFit: "cover",
                      width: "400px",
                      height: "400px",
                    }}
                    src={
                      post[0].img_url != null
                        ? post[0].img_url
                        : "/assests/no-image.svg"
                    }
                    alt=""
                  />
                </div>
                <div className="firstDetail">
                  <div className="categoryBorder">
                    <p className="category">{post[0].category}</p>
                  </div>
                  <div className="firstContent">
                    <div className="firstHead">
                      <p className="head">{post[0].header}</p>
                    </div>
                    <div className="firstText">
                      <p className="text">{post[0].content}</p>
                    </div>
                  </div>
                  <div className="moveBottom">
                    <div className="firstBottom">
                      <div>
                        <p className="date">
                          created : {post[0].created_date.substr(0, 10) + " "}
                          {post[0].created_date.split("T")[1].substr(0, 8)}
                        </p>
                        <p className="date">
                          update : {post[0].updated_date.substr(0, 10) + " "}
                          {post[0].updated_date.split("T")[1].substr(0, 8)}
                        </p>
                      </div>
                      <div className="seemoreButton">
                        <button className="seemore" onClick={() => seemore()}>
                          See more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              {post.slice(1).map((p) => (
                <div>
                  <div className="postLine"></div>
                  <div className="post">
                    <div className="secondImg">
                      <img
                        style={{
                          objectFit: "cover",
                          width: "200px",
                          height: "200px",
                        }}
                        src={
                          p.img_url != null
                            ? p.img_url
                            : "/assests/no-image.svg"
                        }
                        alt=""
                      />
                    </div>
                    <div className="secondDetail">
                      <div className="headAndCat">
                        <div className="moveHeader">
                          <p className="otherHead">{p.header}</p>
                        </div>
                        <p className="otherCategory">{p.category}</p>
                      </div>
                      <p className="text">{p.content}</p>
                      <div className="bottom">
                        <div className="sortDate">
                          <p className="date">
                            created : {p.created_date.substr(0, 10) + " "}
                            {p.created_date.split("T")[1].substr(0, 8)}
                          </p>
                          <p className="update">
                            update : {p.updated_date.substr(0, 10) + " "}
                            {p.updated_date.split("T")[1].substr(0, 8)}
                          </p>
                        </div>
                        <button className="seemore" onClick={() => seemore()}>
                          See more
                        </button>
                        <Button
                          variant="contained"
                          color="error"
                          sx={{
                            height: "40px",
                            marginLeft: "8px",
                          }}
                          onClick={() => deletepost(p.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <button className="write" onClick={() => write()}>
        <div className="writeBorder">
          <DriveFileRenameOutlineOutlinedIcon
            fontSize="large"
            sx={{ color: "white" }}
          />
        </div>
      </button>
    </div>
  );
}
