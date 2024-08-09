// import React from 'react'
// import './adminLayout.css';
// import { Link, useNavigate } from 'react-router-dom';
// import { Box, Button, Card, Divider, List, ListItem, ListItemText, Typography } from '@mui/material';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import LogoutIcon from '@mui/icons-material/Logout';
// const style = {
//     p: 0,
//     width: '100%',
//     maxWidth: 360,
//     borderRadius: 2,
//     border: '1px solid',
//     borderColor: 'divider',
//     backgroundColor: 'background.paper',
//   };
// const Header = () => {

//     const navigate = useNavigate();

//   return (
//     <>
//     <div className='headerContainer'>
//         <div className='headerContentContainer'>
//             {/* <h3>Header Content</h3> */}
//         </div>
//         <div className='imageContainer'>
//             {/* <img src='/assets/profileImgs/profile1.jpeg' className='profileImg'/> */}
//             <div className='profileImg'><AccountCircleIcon sx={{fontSize:'55px'}}/></div>
//             <div className='profileHoverContainer'>
//             {/* className='profileHoverContainer' */}
//                 {/* <Box sx={{display:'flex',flexDirection:'column'}}>
//                     <Typography variant='h7'>John Doe</Typography>
//                     <Typography variant='h9'>Admin</Typography>
//                 </Box>
//                 <Divider/>
//                 <Box></Box>
//                 <Button onClick={()=>{}} variant="contained" fullWidth sx={{marginTop:1}}>
//                 Log Out</Button> */}
//                 <List sx={style} aria-label="mailbox folders">
//                     <ListItem sx={{
//                         display:'flex',
//                         flexDirection:'column',
//                         justifyContent:'flex-start',
//                         alignItems:'flex-start',
//                         width:'100%',
//                         height:70,
//                         // backgroundColor:'yellowgreen'
//                         }}>
//                         <ListItemText>John Doe</ListItemText>
//                         <ListItemText>Admin</ListItemText>
//                     </ListItem>
//                     <Divider component="li" />
//                     <ListItem>
//                         <Button sx={{width:'100%'}}>
//                         <ListItemText><PersonOutlineIcon/></ListItemText>
//                         <ListItemText>Account</ListItemText>
//                         </Button>
//                     </ListItem>
//                     <Divider component="li" />
//                     <ListItem>
//                     <Button sx={{width:'100%'}}>
//                     <ListItemText><LogoutIcon/></ListItemText>
//                     <ListItemText>Logout</ListItemText>
//                     </Button>
//                     </ListItem>
//                 </List>
//             </div>
//         </div>
//     </div>
//     </>
//   )
// }

// export default Header;




// import React from 'react';
// import './adminLayout.css';
// import { Link, useNavigate } from 'react-router-dom';
// import { Box, Button, Card, Divider, List, ListItem, ListItemText, Typography } from '@mui/material';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import LogoutIcon from '@mui/icons-material/Logout';

// const style = {
//   p: 0,
//   width: '100%',
//   maxWidth: 360,
//   borderRadius: 2,
//   border: '1px solid',
//   borderColor: 'divider',
//   backgroundColor: 'background.paper',
// };

// const Header = () => {
//   const navigate = useNavigate();

//   return (
//     <div className='headerContainer'>
//       <div className='headerContentContainer'>
//         {/* <h3>Header Content</h3> */}
//       </div>
//       <div className='imageContainer'>
//         <div className='profileImg'>
//           <AccountCircleIcon sx={{ fontSize: '55px' }} />
//         </div>
//         <div className='profileHoverContainer'>
//           <List sx={style} aria-label="profile options">
//             <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '10px' }}>
//               <ListItemText primary="John Doe" secondary="Admin" />
//             </ListItem>
//             <Divider component="li" />
//             <ListItem>
//               <Button fullWidth sx={{ display: 'flex', justifyContent: 'flex-start', padding: '10px' }}>
//                 <PersonOutlineIcon sx={{ marginRight: '10px' }} />
//                 <ListItemText primary="Account" />
//               </Button>
//             </ListItem>
//             <Divider component="li" />
//             <ListItem>
//               <Button fullWidth sx={{ display: 'flex', justifyContent: 'flex-start', padding: '10px' }}>
//                 <LogoutIcon sx={{ marginRight: '10px' }} />
//                 <ListItemText primary="Logout" />
//               </Button>
//             </ListItem>
//           </List>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;




// import React from 'react';
// import './adminLayout.css';
// import { Link, useNavigate } from 'react-router-dom';
// import { Box, Button, Card, Divider, List, ListItem, ListItemText, Typography } from '@mui/material';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import LogoutIcon from '@mui/icons-material/Logout';

// const style = {
//   p: 0,
//   width: '100%',
//   maxWidth: 360,
//   borderRadius: 2,
//   border: '1px solid',
//   borderColor: 'divider',
//   backgroundColor: 'background.paper',
// };

// const Header = () => {
//   const navigate = useNavigate();

//   return (
//     <div className='headerContainer'>
//       <div className='headerContentContainer'>
//         {/* <h3>Header Content</h3> */}
//       </div>
//       <div className='imageContainer'>
//         <div className='profileImg'>
//           <AccountCircleIcon sx={{ fontSize: '55px' }} />
//         </div>
//         <div className='profileHoverContainer'>
//           <List sx={style} aria-label="profile options">
//             <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '8px' }}>
//               <ListItemText primary="John Doe" secondary="Admin" />
//             </ListItem>
//             <Divider component="li" />
//             <ListItem sx={{ height: '48px' }}>
//               <Button fullWidth sx={{ display: 'flex', alignItems: 'center', padding: '8px' }}>
//                 <PersonOutlineIcon sx={{ marginRight: '10px' }} />
//                 <ListItemText primary="Account" />
//               </Button>
//             </ListItem>
//             <Divider component="li" />
//             <ListItem sx={{ height: '48px' }}>
//               <Button fullWidth sx={{ display: 'flex', alignItems: 'center', padding: '8px' }}>
//                 <LogoutIcon sx={{ marginRight: '10px' }} />
//                 <ListItemText primary="Logout" />
//               </Button>
//             </ListItem>
//           </List>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;






import React from 'react';
import './adminLayout.css';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, Divider, List, ListItem, ListItemText, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className='headerContainer'>
      <div className='headerContentContainer'>
        {/* <h3>Header Content</h3> */}
      </div>
      <div className='imageContainer'>
        <div className='profileImg'>
          <AccountCircleIcon sx={{ fontSize: '55px' }} />
        </div>
        <div className='profileHoverContainer'>
          <List>
            <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '8px' }}>
              <ListItemText primary="John Doe" secondary="Admin" sx={{padding:'0 10px'}} />
            </ListItem>
            <Divider component="li" />
            <ListItem sx={{ height: '40px' }}>
              <Button fullWidth sx={{ display: 'flex', alignItems: 'center', padding: '5px',width:'100%' }}>
                <PersonOutlineIcon sx={{  }} />
                <ListItemText primary="Password" />
              </Button>
            </ListItem>
            <Divider component="li" />
            <ListItem sx={{ height: '40px' }}>
              <Button fullWidth sx={{ display: 'flex', alignItems: 'center', padding: '5px' }}>
                <LogoutIcon sx={{  }} />
                <ListItemText primary="Logout" />
              </Button>
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
}

export default Header;
