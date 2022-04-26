import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./LoginRegister.css";
import BlogIcon from "../assets/blok.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import googleLogo from "../assets/google.png";
import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { BlogContext } from "../contexts/BlogContext";
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
  };
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  return (
    <div className="login-container">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <form onSubmit={handleSubmit}>
            <Box className="login-box">
              <img className="blog-icon" src={BlogIcon} alt="blog_icon" />
              <h2>── NEW BLOG ──</h2>

              <div className="login-textfields">
                <TextField
                  name="title"
                  type="text"
                  id="outlined-basic"
                  label="Title"
                  variant="outlined"
                  required
                  onChange={handleChange}
                />

                <TextField
                  name="imageURL"
                  type="url"
                  id="outlined-basic2"
                  label="Image URL"
                  variant="outlined"
                  required
                  onChange={handleChange}
                />
                <TextField
                  name="content"
                  multiline
                  minRows={8}
                  id="outlined-basic2"
                  label="Content"
                  variant="outlined"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="login-buttons">
                {/* buttonlara hover ve background color eklenmeli */}
                <Button type="submit" variant="contained">
                  SUBMIT
                </Button>
              </div>
            </Box>
          </form>
        </Container>
      </React.Fragment>
    </div>
  );
}
