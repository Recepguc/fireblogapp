import * as React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./Blog.css";
import BlogIcon from "../assets/blok.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "react-toastify/dist/ReactToastify.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { BlogContext } from "../contexts/BlogContext";
import ToastNotify from "../helpers/ToastNotify";
// import { signIn, signUpProvider } from "../helpers/firebase";
// import { blueGrey } from "@mui/material/colors";
// import { createTheme } from "@mui/material/styles";
const initialValues = { title: "", imageURL: "", content: "" };
export default function NewBlog() {
  const navigate = useNavigate();
  const { AddBlog } = useContext(BlogContext);
  const [info, setInfo] = useState(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    AddBlog(info);
    navigate("/");
    ToastNotify(`${info.title} Added Successfully`);
  };
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  return (
    <div className="login-container">
      <Container className="container" maxWidth="xs">
        <form onSubmit={handleSubmit}>
          <Box className="login-box">
            <img className="blog-icon" src={BlogIcon} alt="blog_icon" />
            <h2>── NEW BLOG ──</h2>

            <div className="login-textfields">
              <TextField
                style={{ marginTop: "1rem" }}
                name="title"
                type="text"
                id="outlined-basic"
                label="Title"
                variant="outlined"
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
                required
                onChange={handleChange}
              />
              <TextField
                style={{
                  marginTop: "1rem",
                }}
                name="content"
                multiline
                minRows={8}
                maxRows={10}
                id="filled-multiline-static"
                label="multiline"
                variant="outlined"
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
