import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { width } from "@mui/system";
import MenuItem from "@mui/material/MenuItem";
import Axios from "../axiosInstance";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export const Create = () => {
  const navigate=useNavigate();
  const [header, setheader] = useState();
  const [content, setcontent] = useState();
  const [img, setimg] = useState();
  const [category, setcategory] = useState(1);
  const post = async () => {
    const create = await Axios.post("/createPost", {
      header: header,
      content: content,
      img_url: img,
      category: category,
      user_id:1,
    });
    navigate("/home");
    console.log(create.data);
    
  };

  const categories = [
    {
      value: 1,
      label: "Lifestyles",
    },
    {
      value: 2,
      label: "Foods",
    },
    {
      value: 3,
      label: "Others",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <TextField
        id="outlined-select-currency"
        select
        label="Select"
        value={categories[category - 1].value}
      >
        {categories.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            onClick={() => setcategory(option.value)}
          >
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        value={header}
        onChange={(e) => setheader(e.target.value)}
        placeholder="header"
        variant="outlined"
      />
      <TextField
        value={img}
        onChange={(e) => setimg(e.target.value)}
        placeholder="img_url"
        variant="outlined"
      />
      <TextField
        value={content}
        onChange={(e) => setcontent(e.target.value)}
        placeholder="content"
        variant="outlined"
      />
      <Button variant="contained" onClick={post}>submit</Button>
    </div>
  );
};
