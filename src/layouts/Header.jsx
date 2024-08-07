import React from 'react'
import './adminLayout.css';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Card } from '@mui/material';

const Header = () => {

    const navigate = useNavigate();

  return (
    <>
    <div className='headerContainer'>
        <div className='headerContentContainer'>
            {/* <h3>Header Content</h3> */}
        </div>
        <div className='imageContainer'>
            <img src='/assets/profileImgs/profile1.jpeg' className='profileImg'/>
            <div className='profileHoverContainer'>
                {/* <Card> */}
                <Link to='/profile'>Profile</Link>
                <Button onClick={()=>{}} variant="contained" fullWidth sx={{marginTop:1}}>Log Out</Button>
                {/* </Card> */}
            </div>
        </div>
    </div>
    </>
  )
}

export default Header;