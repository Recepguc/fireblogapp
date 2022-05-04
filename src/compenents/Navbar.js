import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";

import Container from "@mui/material/Container";

import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import logo from "../assets/images.png";
import { useNavigate } from "react-router-dom";
import { logOut } from "../helpers/Firebase";
import { useContext } from "react";
import { AuthContext } from "../contexts/AutContext";
import ToastNotify from "../helpers/ToastNotify";

const page = ["<Recep/>"];

const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const { currentUser } = useContext(AuthContext);
  // const currentUser = true;
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "flex" } }}
            onClick={() => navigate("/")}
          >
            <img src={logo} alt="clglogo" width="50px" height="50px" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}></Box>
          {/* ortadaki yazı kısmı */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>──── {page}Blog ──── </h1>
          </Box>
          <span>
            {currentUser?.displayName
              ? currentUser?.displayName
              : currentUser?.email}
          </span>
          {/* Profil ikonu */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ color: "white", p: 0 }}
              >
                <AccountCircleIcon fontSize="large" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {currentUser ? (
                <>
                  <MenuItem
                    onClick={() => {
                      navigate("/profile");
                      setAnchorElUser(null);
                    }}
                  >
                    <Typography textAlign="center">Profile</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      navigate("/newblog");
                      setAnchorElUser(null);
                    }}
                  >
                    <Typography textAlign="center">New</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      logOut();
                      navigate("/login");
                      setAnchorElUser(null);
                      ToastNotify(` Logout Success`);
                    }}
                  >
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </>
              ) : (
                <>
                  <MenuItem
                    onClick={() => {
                      navigate("/login");
                      setAnchorElUser(null);
                    }}
                  >
                    <Typography textAlign="center">Login</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      navigate("/register");
                      setAnchorElUser(null);
                    }}
                  >
                    <Typography textAlign="center">Register</Typography>
                  </MenuItem>
                </>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
