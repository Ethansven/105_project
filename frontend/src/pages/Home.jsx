import React from "react";
import "../css/Home.css";
import App from "../App";
import SortIcon from "@mui/icons-material/Sort";
import { useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
export default function Home() {
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
  const write = ()=>{
    navigate("/write")
  }
  const img = "";
  return (
    <div className="Home">
      <div className="Head">
        <p className="Linehome"></p>
        <p className="Text">Home</p>
        <p className="Linehome"></p>
      </div>
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
              <MenuItem onClick={handleClose}>Sort by created date</MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>Sort by updated date</MenuItem>
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
                src={img != "" ? img : "/assests/no-image.svg"}
                alt=""
              />
            </div>
            <div className="firstDetail">
              <div className="categoryBorder">
                <p className="category">category</p>
              </div>
              <div className="firstContent">
                <div className="firstHead">
                  <p className="head">Header</p>
                </div>
                <div className="firstText">
                  <p className="text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Itaque quos consequuntur amet quae adipisci est recusandae
                    in voluptatum exercitationem obcaecati harum officia magnam
                    aut repellat, similique maiores atque repellendus
                    blanditiis.
                  </p>
                </div>
              </div>
              <div className="moveBottom">
                <div className="firstBottom">
                  <div>
                    <p className="date">created date</p>
                    <p className="date">update date</p>
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
          <div className="postLine"></div>
          {/*  */}
          <div className="post">
            <div className="secondImg">
              <img
                style={{
                  objectFit: "cover",
                  width: "200px",
                  height: "200px",
                }}
                src={img != "" ? img : "/assests/no-image.svg"}
                alt=""
              />
            </div>
            <div className="secondDetail">
              <div className="headAndCat">
                <div className="moveHeader">
                  <p className="otherHead">Header</p>
                </div>
                <p className="otherCategory">category</p>
              </div>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
                quos consequuntur amet quae adipisci est recusandae in
                voluptatum exercitationem obcaecati harum officia magnam aut
                repellat, similique maiores atque repellendus blanditiis.
              </p>
              <div className="bottom">
                <div className="sortDate">
                  <p className="date">created date</p>
                  <p className="update">update date</p>
                </div>
                <button className="seemore" onClick={() => seemore()}>
                  See more
                </button>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="postLine"></div>
          {/*  */}
          <div className="post">
            <div className="secondImg">
              <img
                style={{
                  objectFit: "cover",
                  width: "200px",
                  height: "200px",
                }}
                src={img != "" ? img : "/assests/no-image.svg"}
                alt=""
              />
            </div>
            <div className="secondDetail">
              <div className="headAndCat">
                <div className="moveHeader">
                  <p className="otherHead">Header</p>
                </div>
                <p className="otherCategory">category</p>
              </div>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
                quos consequuntur amet quae adipisci est recusandae in
                voluptatum exercitationem obcaecati harum officia magnam aut
                repellat, similique maiores atque repellendus blanditiis.
              </p>
              <div className="bottom">
                <div className="sortDate">
                  <p className="date">created date</p>
                  <p className="update">update date</p>
                </div>
                <button className="seemore" onClick={() => seemore()}>
                  See more
                </button>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="postLine"></div>
          {/*  */}
          <div className="post">
            <div className="secondImg">
              <img
                style={{
                  objectFit: "cover",
                  width: "200px",
                  height: "200px",
                }}
                src={img != "" ? img : "/assests/no-image.svg"}
                alt=""
              />
            </div>
            <div className="secondDetail">
              <div className="headAndCat">
                <div className="moveHeader">
                  <p className="otherHead">Header</p>
                </div>
                <p className="otherCategory">category</p>
              </div>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
                quos consequuntur amet quae adipisci est recusandae in
                voluptatum exercitationem obcaecati harum officia magnam aut
                repellat, similique maiores atque repellendus blanditiis.
              </p>
              <div className="bottom">
                <div className="sortDate">
                  <p className="date">created date</p>
                  <p className="update">update date</p>
                </div>
                <button className="seemore" onClick={() => seemore()}>
                  See more
                </button>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>

      <button className="write" onClick={()=>write()}>
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

