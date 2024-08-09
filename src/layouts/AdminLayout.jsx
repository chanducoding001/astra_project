// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import CssBaseline from '@mui/material/CssBaseline';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

// const drawerWidth = 240;

// export default function AdminLayout() {
//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{ 
//             width: `calc(100% - ${drawerWidth}px)`, 
//             ml: `${drawerWidth}px`,
//             backgroundColor:'whitesmoke',
//             // boxShadow:'none'
//             boxShadow:'0px 10px 5px rgba(5,5,5,0.5)'
//         }}
//       >
//         <Toolbar>
//           <Typography variant="h6" noWrap component="div">
//             Header
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//             boxSizing: 'border-box',
//             backgroundColor:'whitesmoke',
//             boxShadow:'10px 0px 5px rgba(5,5,5,0.5)'
//           },
//         }}
//         variant="permanent"
//         anchor="left"
//       >
//         <Toolbar />
//         <Divider />
//         <List>
//           {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//             <ListItem key={text} disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//       <Box
//         component="main"
//         sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
//       >
//         <Toolbar />
//         <Typography variant='h5'>Admin Layout</Typography>
//       </Box>
//     </Box>
//   );
// }


import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { NavLink, Outlet } from 'react-router-dom';
import Header from './Header';
const drawerWidth = 240;

export default function AdminLayout() {
  const icons = [<PersonOutlineIcon />,<ContentPasteOutlinedIcon/>];
    const listText = ['Users','Projects'];
    const listLinks = ['/','/projects'];
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ 
          width: `calc(100% - ${drawerWidth}px)`, 
          ml: `${drawerWidth}px`,
          backgroundColor: 'whitesmoke',
          
          boxShadow: '0px 10px 10px rgba(0,0,0,0.3)'
        }}
      >
        <Toolbar>
          {/* <Typography variant="h6" noWrap component="div">
            Header
          </Typography> */}
          <Header/>
        </Toolbar>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: `-${drawerWidth}px`,
            width: drawerWidth,
            height: '100%',
            boxShadow: '-60px 30px 30px rgba(0,0,0,0.1)'
          }}
        />
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: 'whitesmoke',
            boxShadow: '10px 73px 10px rgba(0,0,0,0.3)',
            // border:'none',
        },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {listText.map((text, index) => (
            // <NavLink to={listLinks[index]}>
            //   <ListItem key={text} disablePadding>
            //   <ListItemButton>
            //     <ListItemIcon>
            //       {icons[index]}
            //     </ListItemIcon>
            //     <ListItemText primary={text} />
            //   </ListItemButton>
            // </ListItem>
            // </NavLink>
            <NavLink 
                            to={listLinks[index]} 
                            key={text}
                            style={({ isActive }) => ({
                                textDecoration: 'none',
                                color: isActive ? 'blue' : 'inherit',
                                backgroundColor: isActive ? 'rgba(0, 0, 255, 0.1)' : 'transparent',
                                display: 'block',
                            })}
                        >
                            {({ isActive }) => (
                                <ListItem disablePadding>
                                    <ListItemButton
                                        sx={{
                                            backgroundColor: isActive ? 'rgba(0, 0, 255, 0.1)' : 'transparent',
                                        }}
                                    >
                                        <ListItemIcon>
                                            {icons[index]}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                </ListItem>
                            )}
                        </NavLink>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Outlet/>
      </Box>
    </Box>
  );
}

