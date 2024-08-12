// import { Box, Card, Modal } from '@mui/material';
// import React from 'react'
// import './auth.css';
// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 448,
//     height:351,
//     // width: 400,
//     // height:'50%',
//     bgcolor: 'background.paper',
//     border: '2px solid white',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)',
//     // boxShadow: 24,
//     pt: 2,
//     px: 4,
//     pb: 3,
//     display:'flex',
//     alignItems:'center',
//     justifyContent:'center',
//     flexDirection:'column'
//   };
// const SuccessPage = (props) => {
//     const {open,handleClose,children} = props;
//   return (
//     <>
//     <Modal
//   open={open}
//   onClose={handleClose}
//   aria-labelledby="parent-modal-title"
//   aria-describedby="parent-modal-description"
// >
// <Box sx={{width:'100vw',height:'100vh',backgroundColor:'white'}}>
// <Box sx={{ ...style, width: 400 }}>
// {children}
// </Box>
// </Box>
// </Modal>
//     </>
//   )
// }

// export default SuccessPage;




import { Box, Button, Modal, Typography } from '@mui/material';
import React from 'react';
import '../auth/auth.css';


const wrapper = { 
    width: '100vw', 
    height: '100vh', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: 'whiteSmoke'
}
const SuccessPage = (props) => {
  const { open, handleClose, children,boxStyles } = props;
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: boxStyles?.width ?? 400,
    height: boxStyles?.height ?? 351,
    bgcolor: 'background.paper',
    border: '2px solid white',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1), 0 3px 10px rgba(0, 0, 0, 0.1)',
  //   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)',
    pt: 2,
    px: boxStyles?.padding ?? 4,
    pb: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center', // Ensures the text is centered
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={wrapper}>
          <Box sx={style}>
            {children}
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default SuccessPage;
