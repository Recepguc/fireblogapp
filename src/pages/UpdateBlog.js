import * as React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./Blog.css";
import BlogIcon from "../assets/blok.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { BlogContext } from "../contexts/BlogContext";
import { useLocation } from "react-router-dom";
import ToastNotify from "../helpers/ToastNotify";
// import { signIn, signUpProvider } from "../helpers/firebase";
// import { blueGrey } from "@mui/material/colors";
// import { createTheme } from "@mui/material/styles";

export default function UpdateBlog() {
  const navigate = useNavigate();
  const location = useLocation();
  const item = location.state.item;

  const initialValues = { ...item };

  const { EditBlog } = useContext(BlogContext);
  const [info, setInfo] = useState(initialValues);

  const UpdateBlog = (e) => {
    e.preventDefault();
    EditBlog(info);
    const item = info;
    navigate("/details", { state: { item } });

    ToastNotify(`${info.title} updated Successfully`);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  return (
    <div className="login-container">
      <Container className="container" maxWidth="sm">
        <form onSubmit={UpdateBlog}>
          <Box className="login-box">
            <img className="blog-icon" src={BlogIcon} alt="blog_icon" />
            <h2>──UPDATE {info.title} ──</h2>

            <div className="login-textfields">
              <TextField
                style={{ marginTop: "1rem" }}
                name="title"
                type="text"
                id="outlined-basic"
                label="Title"
                variant="outlined"
                value={info.title}
                required
                onChange={handleChange}
              />

              <TextField
                style={{ marginTop: "1rem" }}
                name="imageURL"
                type="url"
                id="outlined-basic"
                label="Image URL"
                variant="outlined"
                value={info.imageURL}
                required
                onChange={handleChange}
              />
              <TextField
                className="textarea"
                style={{ marginTop: "1rem" }}
                name="content"
                multiline
                minRows={8}
                id="outlined-basic"
                label="Content"
                variant="outlined"
                value={info.content}
                required
                onChange={handleChange}
              />
            </div>
            <div className="login-buttons">
              {/* buttonlara hover ve background color eklenmeli */}
              <Button
                type="submit"
                variant="contained"
                style={{ marginTop: "1rem" }}
              >
                SUBMIT
              </Button>
            </div>
          </Box>
        </form>
      </Container>
    </div>
  );
}
