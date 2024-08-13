import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RepeatIcon from '@mui/icons-material/Repeat';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Box, Card, Typography } from '@mui/material';
import '../components/admin/admin.css';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import SuccessPage from './SuccessPage';
import { styled } from '@mui/material/styles';
import AddUser from '../components/admin/users/AddUser';
import UserAccess from '../components/admin/users/UserAccess';
import AddProject from '../components/admin/projects/AddProject';

const ReUseTable = ({ rows, columns,screen,addBtn,title }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeRow, setActiveRow] = useState(null);
  const [addUserPopUp,setAddUserPopUp] = useState(false);
  const [userAccessPopUp,setUserAccessPopUp] = useState(false);
  const [deletePopUp,setDeletePopUp] = useState(false);
  const [addProjectPopUp,setAddProjectPopUp] = useState(false);

  const handleAddUserPopUp = ()=>{
    setAddUserPopUp(!addUserPopUp);
  }
  const handleUserAccessPopUp = ()=>{
    setUserAccessPopUp(!userAccessPopUp);
  }
  const handleDeletePopUp = ()=>{
    setDeletePopUp(!deletePopUp);
    
  }
  const handleAddProjectPopUp = ()=>{
    setAddProjectPopUp(!addProjectPopUp);
  }
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const toggleActionMenu = (rowId) => {
    setActiveRow(activeRow === rowId ? null : rowId);
  };
  const handleUserAccess = (userId)=>{
    setUserAccessPopUp(!userAccessPopUp);
    setActiveRow(null);
  }
  const handleUserDelete = (userId)=>{
    setDeletePopUp(!deletePopUp);
    setActiveRow(null);
  }
  const getCellContent = (column, row) => {
    if (column.id === 'action') {
      return (
        <div className="action-container">
          <Button variant="outlined" onClick={() => toggleActionMenu(row.id)}>
            <MoreVertIcon />
          </Button>
          <Card sx={{
            borderRadius:1,
            border:'none',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
          }}
            variant="outlined"
            className={`action-card ${
              activeRow === row.id ? 'showCard' : 'hideCard'
            }`}
          >
            <Button onClick={()=>{handleUserAccess(row?.id)}}>
            <span className='displayIcon'><RepeatIcon/></span>
            <span className='displayText'>User Access</span>
            </Button>
            <Button onClick={()=>{handleUserDelete(row?.id)}}>
            <span className='displayIcon'><DeleteOutlineIcon/></span>
            <span className='displayText'>Delete</span>
            </Button>
          </Card>
        </div>
      );
    } else {
      return column.format && typeof row[column.id] === 'number'
        ? column.format(row[column.id])
        : row[column.id];
    }
  };

  const filteredRows = rows.filter((row) =>
    Object.values(row).some(
      (value) =>
        typeof value === 'string' &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  const CustomButton = styled(Button)(({ theme }) => ({
    color: 'white', 
    backgroundColor: 'blue', 
    '& .MuiSvgIcon-root': {
      color: 'white', 
    },
    '&:hover': {
      backgroundColor: 'darkblue', 
    },
  }));
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Typography variant='h5' sx={{textAlign:'center',marginTop:'10px',
                    fontWeight:'bold',}}>{title}</Typography>
      <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'0 30px'}}>
      <TextField
        // label="Search"
        // sx={{padding:'3px'}}
        variant="outlined"
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
       
    {screen === 'users' ? (
  <CustomButton variant="contained" onClick={handleAddUserPopUp}>
    <AddOutlinedIcon style={{ fill: 'white', marginRight: 10 }} />
    Add User
  </CustomButton>
) : screen === 'projects' ? (
  <CustomButton variant="contained" onClick={handleAddProjectPopUp}>
    <AddOutlinedIcon style={{ fill: 'white', marginRight: 10 }} />
    Add Project
  </CustomButton>
) : null}

      </Box>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    fontSize: '1rem',
                    // color:'#4C4E64DE',
                    color:'blue',
                    textAlign:'center',
                    backgroundColor: '#E3ECFE',
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, rowIndex) => (
                <TableRow
                  hover
                  key={rowIndex}
                  role="checkbox"
                  tabIndex={-1}
                  style={{
                    backgroundColor:'#ffffff',
                    
                  }}
                >
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        fontSize: '1rem',
                        textAlign:'center',
                      }}
                    >
                      {getCellContent(column, row)}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
        component="div"
        count={filteredRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <SuccessPage open={addUserPopUp} handleClose = {handleAddUserPopUp} boxStyles = {{height:250,width:300}}>
        <AddUser handleAddUserPopUp={handleAddUserPopUp}/>
      </SuccessPage>
      <SuccessPage open={userAccessPopUp} handleClose = {handleUserAccessPopUp} boxStyles={{padding:1}}>
        <UserAccess handleUserAccessPopUp={handleUserAccessPopUp}/>
      </SuccessPage>
      <SuccessPage open={deletePopUp} handleClose = {handleDeletePopUp}>
        <Typography>You have successfully Deleted User!</Typography>
          <Button variant='contained' onClick={handleDeletePopUp}>Close</Button>
      </SuccessPage>
      <SuccessPage open={addProjectPopUp} handleClose = {handleAddProjectPopUp}>
        <AddProject onClick={handleAddProjectPopUp}/>
      </SuccessPage>
      
    </Paper>
  );
};

export default ReUseTable;

