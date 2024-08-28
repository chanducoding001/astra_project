import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { Button, List, ListItem, ListItemText } from '@mui/material';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import SuccessPage from '../reusables/SuccessPage';
import useActiveRow from '../reusables/useActiveRow';
import ChangePasswod from './ChangePasswod';

export default function Header() {
     const [passwordPopUp,setPasswordPopUp] = React.useState(false);
   const [activeRow,setActiveRow] = useActiveRow();
   const [openPopUp,setOpenPopUp] = useState(false);
   const [anchorEl, setAnchorEl] = useState(null);

   const togglePasswordPopUp = ()=>{
     setPasswordPopUp(!passwordPopUp);
     setActiveRow(null);
   };

   const handleOpenPopUp = ()=>{
     setOpenPopUp(!openPopUp);
   }
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box sx={{ display: 'flex', 
        alignItems: 'center', 
        textAlign: 'center',
        // background:'blue',
        width:'95%',
        justifyContent:'flex-end'
        }}>
        <Tooltip title="Profile">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>
            {/* <AccountCircleIcon sx={{ }} /> */}
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              padding:'0px',
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <List sx={{ width: "200px" }}>
             {" "}
             {/* Adjust width as needed */}
             <ListItem
               sx={{
                 display: "flex",
                 flexDirection: "column",
                 alignItems: "flex-start",
                //  padding: "2px 8px",
                padding:'0 8px',
                 width: "100%",  
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
                 width: "100%",  
                 padding: "0",  
               }}
             >
               <Button
                 fullWidth
                 sx={{
                   display: "flex",
                   alignItems: "center",
                  //  padding: "5px 25px",
                   padding: "5px 15px",
                   height: "100%",
                   justifyContent: "flex-start",
                 }}
                 onClick={togglePasswordPopUp}
               >
                 <PersonOutlineIcon />
                 <ListItemText primary="Password" />
               </Button>
             </ListItem>
             <Divider component="li" />
             <ListItem
               sx={{
                 height: "40px",
                 width: "100%",  
                 padding: "0", 
               }}
             >
               <Button
                 fullWidth
                 sx={{
                   display: "flex",
                   alignItems: "center",
                  //  padding: "5px 25px",
                   padding: "5px 15px",
                   justifyContent: "center",
                   height: "100%",
                 }}
               >
                 <LogoutIcon  />
                 <ListItemText primary="Logout"  />
               </Button>
             </ListItem>
           </List>
      </Menu>
               <SuccessPage open={passwordPopUp} 
         handleClose = {togglePasswordPopUp}
         boxStyles={{height:550,width:500}}
         activeRow={activeRow}
         >
         <Box>
         <ChangePasswod cancel={togglePasswordPopUp} handleChangePasswordResultPopUp={handleOpenPopUp}/>
        
         </Box>
         </SuccessPage>
         <SuccessPage open={openPopUp} handleClose={handleOpenPopUp} boxStyles={{height:250,width:300,bgColor:''}}>
                 <Typography>Password change successful</Typography>
                 <Button onClick={handleOpenPopUp} variant="contained">Close</Button>
         </SuccessPage>
    </>
  );
}






// import React, { useState } from "react";
// import "./adminLayout.css";
// import { useNavigate } from "react-router-dom";
// import { Box, Button, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import LogoutIcon from "@mui/icons-material/Logout";
// import SuccessPage from "../reusables/SuccessPage";
// import ChangePasswod from "./ChangePasswod";
// import useActiveRow from "../reusables/useActiveRow";

// const Header = () => {
//   const [passwordPopUp,setPasswordPopUp] = useState(false);
//   const [activeRow,setActiveRow] = useActiveRow();
//   const [openPopUp,setOpenPopUp] = useState(false);

//   const togglePasswordPopUp = ()=>{
//     setPasswordPopUp(!passwordPopUp);
//     setActiveRow(null);
//   };

//   const handleOpenPopUp = ()=>{
//     setOpenPopUp(!openPopUp);
//   }
//   return (
//     <div className="headerContainer">
//       <div className="headerContentContainer">
//       </div>
//       <div className="imageContainer">
//         <div className="profileImg">
//           <AccountCircleIcon sx={{ fontSize: "50px" }} />
//         </div>
//         <div className="profileHoverContainer">
//           <List sx={{ width: "200px" }}>
//             {" "}
//             {/* Adjust width as needed */}
//             <ListItem
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "flex-start",
//                 padding: "2px 8px",
//                 width: "100%", // Ensure ListItem takes full width
//               }}
//             >
//               <ListItemText
//                 primary="John Doe"
//                 secondary="Admin"
//                 sx={{ padding: "0 10px", fontWeight: "bold" }}
//               />
//             </ListItem>
//             <Divider component="li" />
//             <ListItem
//               sx={{
//                 height: "40px",
//                 width: "100%", // Ensure ListItem takes full width
//                 padding: "0", // Remove padding to fit button
//               }}
//             >
//               <Button
//                 fullWidth
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   padding: "5px 25px",
//                   height: "100%",
//                   justifyContent: "flex-start",
//                 }}
//                 onClick={togglePasswordPopUp}
//               >
//                 <PersonOutlineIcon sx={{ mr: 1 }} />
//                 <ListItemText primary="Password" sx={{ marginLeft: "8px" }} />
//               </Button>
//             </ListItem>
//             <Divider component="li" />
//             <ListItem
//               sx={{
//                 height: "40px",
//                 width: "100%", // Ensure ListItem takes full width
//                 padding: "0", // Remove padding to fit button
//               }}
//             >
//               <Button
//                 fullWidth
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   padding: "5px 25px",
//                   justifyContent: "flex-start",
//                   height: "100%",
//                 }}
//               >
//                 <LogoutIcon sx={{ mr: 1 }} />
//                 <ListItemText primary="Logout" sx={{ marginLeft: "8px" }} />
//               </Button>
//             </ListItem>
//           </List>
//         </div>
//         <SuccessPage open={passwordPopUp} 
//         handleClose = {togglePasswordPopUp}
//         boxStyles={{height:550,width:500}}
//         >
//         <Box>
//         <ChangePasswod cancel={togglePasswordPopUp} handleChangePasswordResultPopUp={handleOpenPopUp}/>
        
//         </Box>
//         </SuccessPage>
//         <SuccessPage open={openPopUp} handleClose={handleOpenPopUp} boxStyles={{height:250,width:300,bgColor:''}}>
//                 <Typography>Password change successful</Typography>
//                 <Button onClick={handleOpenPopUp} variant="contained">Close</Button>
//         </SuccessPage>
//       </div>
//     </div>
//   );
// };

// export default Header;

