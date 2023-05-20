import React, { useState } from "react";
import "../css/Post.css";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import SortIcon from "@mui/icons-material/Sort";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
export default function Post() {
  const navigate = useNavigate();
  const img = "";
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [comment, setComment] = useState();
  return (
    <div>
      <div className="Icon">
        <div className="changeToLeft">
          <div className="changePositionIcon">
            <button
              className="closeButton"
              onClick={() => {
                navigate(-1);
              }}
            >
              <ArrowLeftIcon fontSize="large" />
              back
            </button>
          </div>
        </div>
      </div>
      <div className="post">
        <div className="fitPost">
          <p className="head">Header</p>
          <div className="postImg">
            <img
              style={{
                objectFit: "cover",
                width: "300px",
                height: "300px",
              }}
              src={img != "" ? img : "/assests/no-image.svg"}
              alt=""
            />
          </div>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
            quos consequuntur amet quae adipisci est recusandae in voluptatum
            exercitationem obcaecati harum officia magnam aut repellat,
            similique maiores atque repellendus blanditiis.Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Itaque quos consequuntur amet
            quae adipisci est recusandae in voluptatum exercitationem obcaecati
            harum officia magnam aut repellat, similique maiores atque
            repellendus blanditiis.
          </p>
          <div className="postBottom">
            <div className="likeComment">
              <button className="postButton">
                <FavoriteIcon fontSize="large" sx={{ color: "#ff9494" }} />
              </button>
              <p className="count">0</p>
              <button className="postButton">
                <QuestionAnswerIcon
                  fontSize="large"
                  sx={{ color: "#ff9494" }}
                />
              </button>
              <p className="count">0</p>
            </div>
            <div className="day">
              <p className="creday">created : 10/10/65</p>
              <p>updated : 20/10/65</p>
            </div>
          </div>
          <div className="postLine"></div>
          <div className="postIcon">
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
          <div className="commentSection">
            <AccountCircleIcon sx={{ color: "#ff9494", fontSize: "45px" }} />
            <div className="commentText">
              <div className="commentBox">
                <p className="commentUser">Username</p>
              </div>
              <div className="commentBox">
                <p className="comment">
                  Lorem,aesentium harum placeat pariatur.
                </p>
              </div>
            </div>
          </div>
          <div className="postLine"></div>
          <form action="">
            <div className="postSection">
              <AccountCircleIcon sx={{ color: "#ff9494", fontSize: "45px" }} />

              <input
                className="typeComment"
                type="text"
                id="username"
                value={comment}
                required
                placeholder="Type your comment here"
                onChange={(event) => setComment(event.target.value)}
              />
            </div>
            <div className="commentSubmit">
              <input className="Submitbutton" type="submit" value="Submit" />
            </div>
          </form>
          {/* postbox */}
        </div>
      </div>
    </div>
  );
}
