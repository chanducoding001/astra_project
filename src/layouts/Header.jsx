import React, { useState } from "react";
import "./adminLayout.css";
import { useNavigate } from "react-router-dom";
import { Box, Button, Divider, FormControl, IconButton, InputAdornment, InputLabel, List, ListItem, ListItemText, OutlinedInput, TextField, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import SuccessPage from "../reusables/SuccessPage";
import { Field } from "formik";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import ChangePasswod from "./ChangePasswod";

const Header = () => {
  const navigate = useNavigate();
  const [passwordPopUp,setPasswordPopUp] = useState(false);
  const togglePasswordPopUp = ()=>{
    setPasswordPopUp(!passwordPopUp);
  };
  return (
    <div className="headerContainer">
      <div className="headerContentContainer">
        {/* <h3>Header Content</h3> */}
      </div>
      <div className="imageContainer">
        <div className="profileImg">
          <AccountCircleIcon sx={{ fontSize: "50px" }} />
        </div>
        <div className="profileHoverContainer">
          <List sx={{ width: "200px" }}>
            {" "}
            {/* Adjust width as needed */}
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "2px 8px",
                width: "100%", // Ensure ListItem takes full width
              }}
            >
              <ListItemText
                primary="John Doe"
                secondary="Admin"
                sx={{ padding: "0 10px", fontWeight: "bold" }}
              />
            </ListItem>
            <Divider component="li" />
            <ListItem
              sx={{
                height: "40px",
                width: "100%", // Ensure ListItem takes full width
                padding: "0", // Remove padding to fit button
              }}
            >
              <Button
                fullWidth
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "5px 25px",
                  height: "100%",
                  justifyContent: "flex-start",
                }}
                onClick={togglePasswordPopUp}
              >
                <PersonOutlineIcon sx={{ mr: 1 }} />
                <ListItemText primary="Password" sx={{ marginLeft: "8px" }} />
              </Button>
            </ListItem>
            <Divider component="li" />
            <ListItem
              sx={{
                height: "40px",
                width: "100%", // Ensure ListItem takes full width
                padding: "0", // Remove padding to fit button
              }}
            >
              <Button
                fullWidth
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "5px 25px",
                  justifyContent: "flex-start",
                  height: "100%",
                }}
              >
                <LogoutIcon sx={{ mr: 1 }} />
                <ListItemText primary="Logout" sx={{ marginLeft: "8px" }} />
              </Button>
            </ListItem>
          </List>
        </div>
        <SuccessPage open={passwordPopUp} 
        handleClose = {togglePasswordPopUp}
        boxStyles={{height:500,width:500}}
        >
        <Box>
        <ChangePasswod cancel={togglePasswordPopUp}/>
        </Box>
        </SuccessPage>
      </div>
    </div>
  );
};

export default Header;
