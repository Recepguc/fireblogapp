import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import blokicon from "../assets/blok.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import google from "../assets/google.png";
import "./LoginRegister.css"

export default function SimpleContainer() {
  return (
    <div className="loginContainer">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box className="loginBox">
            <img src={blokicon} alt="blokicon" className="blockIcon" />
            <h2  >── REGISTER ──</h2>
            <div className="loginTextField">
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                type="email"
                required
              />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                required
              />
            </div>
            <div className="loginButtons" >
              <Button variant="contained">REGISTER</Button>
              <Button variant="text">
                With
                <span>
                  
                  <img src={google} alt="google" className="loginLogo" />
                </span>
              </Button>
            </div>
          </Box>
        </Container>
      </React.Fragment>
    </div>
  );
}