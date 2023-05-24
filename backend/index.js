import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
const port = 5000;
import mysql from "mysql2";
import login from "./login.js";
import regis from "./regis.js";
import getHome from "./getHome.js";
import createPost from "./createPost.js";
import editProfile from "./editProfile.js";
import deletePost from "./deletePost.js";
import getUser from "./getUser.js";
import authMiddleware from "./authMiddleware.js";
import logout from './logout.js'
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));
app.use(cookieParser());
const connection = mysql.createConnection({
  host: "server2.bsthun.com",
  port: "6105",
  user: "lab_15nvyi",
  password: "aqz6IcGv9o97ae4U",
  database: "lab_blank01_153hqlw",
});
connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Database is connected");
  }
});
app.use(express.json());

// app.use(bodyParser.json());
global.connection = connection;

app.post("/login", login);
app.post("/regis", regis);
app.post("/createPost", createPost);
app.get("/getHome", getHome);
app.patch("/editProfile", authMiddleware, editProfile);
app.delete("/deletePost", deletePost);
app.get("/profile", authMiddleware, getUser);
app.get("/logout",logout);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
