import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react'

const AddUser = (props) => {
    const {handleAddUserPopUp} = props;
  return (
    <>
    <Box sx={{display:'flex',
          flexDirection:'column',
          width:'100%',
          height:'100%',
          alignItems:'flex-start',
          justifyContent:'center'
          }}>
        <Typography variant='h6' sx={{fontWeight:'600'}}>Add User</Typography>
        <TextField
        name='email'
        placeholder='Email'
        type='email'
        // helperText='enter valid email'
        // onChange={}
        // value={}
        />
        
        </Box>
        <Box sx={{width:'100%',display:'flex',justifyContent:'space-around'}}>
        <Button variant='outlined' onClick={handleAddUserPopUp}>Cancel</Button>
        <Button variant='contained'onClick={handleAddUserPopUp} >Invite</Button>
        </Box>
    </>
  )
}

export default AddUser;