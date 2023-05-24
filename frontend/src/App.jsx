import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Lifestyles from "./pages/Lifestyles";
import Foods from "./pages/Foods";
import Others from "./pages/Others";
import Signup from "./pages/Signup";
import { useState } from "react";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Router,
} from "react-router-dom";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Post from "./pages/Post.jsx";
import Profile from "./pages/Profile";
import { Button } from "@mui/material";
import { Create } from "./pages/Create";
import Axios from "./axiosInstance";
function App() {
  const navigate = useNavigate();
  const logout = async () => {
    const out = await Axios.get("/logout");
    navigate("/");
  };
  const toprofile = () => {
    navigate("/profile");
  };
  const [mode, setmode] = useState(false);
  const changemode = () => {
    setmode(!mode);
    console.log(mode);
  };
  const renderMode = () => {
    const style = {
      position: "absolute",
      marginLeft: "20px",
      marginTop: "2px",
    };
    let icon = <LightModeIcon fontSize="smallest" />;
    if (!mode) {
      icon = <NightlightIcon fontSize="smallest" />;
      style.marginLeft = "3px";
    }
    return <div style={style}>{icon}</div>;
  };
  const tab = [
    {
      name: "Home",
      path: "/home",
    },
    {
      name: "Lifestyles",
      path: "/lifestyles",
    },
    {
      name: "Foods",
      path: "/foods",
    },
    {
      name: "Others",
      path: "/others",
    },
  ];
  const [current, setCurrent] = useState("Login");
  const changecurrent = (name) => {
    setCurrent(name);
  };
  return (
    <div className="App">
      <ToastContainer />
      <header className="Header">
        <div className="Navbar">
          <div></div>
          <p className="Logo">Log & Log</p>
          <div className="actions-container">
            <div className="mode-container">
              <label className="OuterButton">
                <input
                  className="InnerButton"
                  type="checkbox"
                  defaultChecked={mode}
                  onClick={() => changemode()}
                />
                <span className="CircleInside">{renderMode()}</span>
              </label>

              <Button
                sx={{ marginLeft: "10px" }}
                color="info"
                variant="contained"
                onClick={() => toprofile()}
              >
                Profile
              </Button>
              <Button
                sx={{ marginLeft: "10px" }}
                color="error"
                variant="contained"
                onClick={() => logout()}
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="Border">
        <nav className="border">
          {tab.map((page) => (
            <NavLink
              to={page.path}
              onClick={() => {
                setCurrent(page.name);
              }}
              className={current === page.name ? "thispage" : "notthispage"}
            >
              {page.name}
            </NavLink>
          ))}
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Login changecurrent={changecurrent} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/lifestyles" element={<Lifestyles />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/others" element={<Others />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/post" element={<Post />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/write" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
