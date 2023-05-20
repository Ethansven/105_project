import express from "express";
const app = express();
const port = 5000;
import mysql from "mysql2";
import login from "./login.js";
import regis from "./regis.js";
import getHome from "./getHome.js"
import createPost from "./createPost.js";
import editProfile from "./editProfile.js";
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
app.patch("/editPeofile",editProfile);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
