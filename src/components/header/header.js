import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import AccessibilityNewRoundedIcon from "@mui/icons-material/AccessibilityNewRounded";
import CardMedia from "@mui/material/CardMedia";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useDispatch } from "react-redux";
import { logout } from "../../features/loginSlice";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import {useNavigate} from "react-router-dom"

import "./header.scss";

export const Header = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const nav = useNavigate();

  const handleGoToProfile= () =>{
    nav("/profile")
  }

  const dispatch = useDispatch();

  const handleSignOut= () =>{
    localStorage.removeItem("token");
    dispatch(logout());
    nav("/")
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <AppBar position="relative" color="transparent" sx={{ borderRadius: 10 }}>
        <Toolbar className="navbarheader">
          <CardMedia
            component="img"
            sx={{
              width: [60, 80, 100, 120],
            }}
            image={require("../assets/dhurologo.png")}
            alt="green iguana"
          />
          <Button
            href="/"
            variant="contained"
            color="inherit"
            className="dhuroButton"
            sx={{ flexGrow: 4, borderRadius: 10, marginX: 1 }}
            startIcon={<AccessibilityNewRoundedIcon />}
          >
            Dhuro
          </Button>
          {props.IsLoggedIn ? (
            <div>
              <Button
                href="/story/create"
                variant="contained"
                color="inherit"
                className="shtoButton"
                sx={{ flexGrow: 1, borderRadius: 10, marginX: 1 }}
                startIcon={<AddRoundedIcon />}
              >
                Shto
              </Button>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                startIcon={<Avatar
                  alt="Harbin A"
                  src="../../assets/images/isaBoletini.png"
                  sx={{ width: 56, height: 56 }}
                />}
              >
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={() => { 
                  handleClose();
                  handleGoToProfile()
                   }}>Profile</MenuItem>

                <MenuItem onClick={() => {
                  handleClose();
                  handleSignOut();
                }}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            <Button
              href="/signin"
              style={{ backgroundColor: "#213123", color: "white" }}
              color="inherit"
              variant="contained"
              sx={{
                flexGrow: 1,
                borderRadius: 10,
                marginX: 1,
              }}
            >
              Kyçu
            </Button>
          )}
        </Toolbar>
      </AppBar>
  );
};
