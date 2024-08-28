import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { NavLink, Outlet } from "react-router-dom";
import Header from "./Header";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';


const drawerWidth = 240;

export default function AdminLayout() {
  // const icons = [<PersonOutlineIcon />, <ContentPasteOutlinedIcon />];
  // const listText = ["Users", "Projects"];
  // const listLinks = ["/", "/projects"];
  const users = {
    superAdmin:{
      icons:[[<PersonOutlineIcon />,<PersonOutlineIcon />,<PersonOutlineIcon />],[<ContentPasteOutlinedIcon />,<ContentPasteOutlinedIcon />]],
      listText:[['Customers List','To Review','Suspended'],['Admin Users','Projects']],
      listLinks:[['/','/superAdminReview','/superAdminSuspended'],['/superAdminUsers','/superAdminProjects']]
    },
    customerAdmin:{
      icons:[<PersonOutlineIcon />, <ContentPasteOutlinedIcon />],
      listText:["Users", "Projects"],
      listLinks:["/", "/projects"]
    },
    endUser:{
      icons:[<ContentPasteOutlinedIcon />],
      listText:["Projects"],
      listLinks:["/"]
    }
  };
  // super admin  - role = 1
  // customer admin - role = 2
  // end user - role = 3
  const {icons,listText,listLinks} = users.customerAdmin;
  const role = +localStorage.getItem('astraUser');
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: "whitesmoke",

          boxShadow: "0px 10px 10px rgba(0,0,0,0.3)",
        }}
      >
        <Toolbar>
          <Header />
        </Toolbar>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: `-${drawerWidth}px`,
            width: drawerWidth,
            height: "100%",
            boxShadow: "-60px 30px 30px rgba(0,0,0,0.1)",
          }}
        />
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "whitesmoke",
            boxShadow: "10px 73px 10px rgba(0,0,0,0.3)",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {
            role ===1 ? (
          <>
          <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{fill:'white'}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{backgroundColor:'#666CFF',color:'white',
            display:'flex',
            justifyContent:'space-between',width:'100%'}}
        >
          <div style={{width:'60%',
            display:'flex',alignItems:'center',justifyContent:'space-around'}}>
          <span><HomeOutlinedIcon style={{fill:'white'}}/></span>
          <span style={{color:'white'}}>Customer</span>
          </div>
        </AccordionSummary>
        <AccordionDetails>
        {listText[0].map((text, index) => (
            <NavLink
              to={listLinks[0][index]}
              key={text}
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "blue" : "inherit",
                backgroundColor: isActive
                  ? "#E3ECFE"
                  : "transparent",
                display: "block",
              })}
            >
              {({ isActive }) => (
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      backgroundColor: isActive
                        ? "#E3ECFE"
                        : "transparent",
                    }}
                  >
                    <ListItemIcon>{icons[0][index]}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              )}
            </NavLink>
          ))}
        </AccordionDetails>
      </Accordion>
      {listText[1].map((text, index) => (
            <NavLink
              to={listLinks[1][index]}
              key={text}
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "blue" : "inherit",
                backgroundColor: isActive
                  ? "#E3ECFE"
                  : "transparent",
                display: "block",
              })}
            >
              {({ isActive }) => (
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      backgroundColor: isActive
                        ? "#E3ECFE"
                        : "transparent",
                    }}
                  >
                    <ListItemIcon>{icons[1][index]}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              )}
            </NavLink>
          ))}
          </>
            ):<>
            {listText.map((text, index) => (
            <NavLink
              to={listLinks[index]}
              key={text}
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "blue" : "inherit",
                backgroundColor: isActive
                  ? "#E3ECFE"
                  : "transparent",
                display: "block",
              })}
            >
              {({ isActive }) => (
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      backgroundColor: isActive
                        ? "#E3ECFE"
                        : "transparent",
                    }}
                  >
                    <ListItemIcon>{icons[index]}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              )}
            </NavLink>
          ))}
            </>
          }
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
