import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./loginRegister.css";
import BlogIcon from "../assets/blok.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import googleLogo from "../assets/google.png";
import { useState } from "react";
import { useNavigate } from "react-router";
import { signIn, signUpProvider } from "../helpers/firebase";
// import { blueGrey } from "@mui/material/colors";
// import { createTheme } from "@mui/material/styles";

export default function NewBlog() {
  // const theme = createTheme({
  //   palette: {
  //     primary: {
  //       main: blueGrey[100],
  //     },
  //   },
  // });

  // const googleBtnColor = blueGrey[100];

  // const eventHandler = ()=>{

  // buraya email ve password bos birakildiginda error mesaji verilmesi fonksiyonu atanmali }
  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [url, setUrl] = useState();
  const [content, setContent] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
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
                  type="text"
                  id="outlined-basic"
                  label="Title"
                  variant="outlined"
                  required
                  onChange={(e) => setTitle(e.target.value)}
                />

                <TextField
                  type="url"
                  id="outlined-basic2"
                  label="Image URL"
                  variant="outlined"
                  required
                  onChange={(e) => setUrl(e.target.value)}
                />
                <TextField
                  multiline
                  minRows={8}
                  id="outlined-basic2"
                  label="Content"
                  variant="outlined"
                  required
                  onChange={(e) => setContent(e.target.value)}
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
