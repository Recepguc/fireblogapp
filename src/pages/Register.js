import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import blokicon from "../assets/blok.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import google from "../assets/google.png";
import "./LoginRegister.css"
import  {useState} from "react";
import { createUser } from "../helpers/Firebase";
import { useNavigate } from "react-router-dom";

export default function SimpleContainer() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate =useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault()
    createUser(email,password,navigate)
    console.log(email,password);
  }
  return (
    <div className="loginContainer">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <form onSubmit={handleSubmit}>

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
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="loginButtons" >
              <Button variant="contained" type="submit" >REGISTER</Button>
              <Button variant="text">
                With
                <span>
                  
                  <img src={google} alt="google" className="loginLogo" />
                </span>
              </Button>
            </div>

          </Box>
          </form>
        </Container>
      </React.Fragment>
    </div>
  );
}