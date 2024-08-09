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
import { Link } from 'react-router-dom';
import RepeatIcon from '@mui/icons-material/Repeat';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Card } from '@mui/material';
import './admin.css';

const ReUseTable = ({ rows, columns }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeRow, setActiveRow] = useState(null);

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

  }
  const handleUserDelete = (userId)=>{
    
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

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TextField
        label="Search"
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
                    fontSize: '1.2rem',
                    backgroundColor: '#E3ECFE',
                    // backgroundColor: '#f2f2f2',
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
                  role="checkbox"
                  tabIndex={-1}
                  key={row.code}
                  style={{
                    backgroundColor:'#ffffff',
                    // backgroundColor: rowIndex % 2 === 0 ? '#ffffff' : '#f9f9f9',
                  }}
                >
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        fontSize: '1rem',
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
    </Paper>
  );
};

export default ReUseTable;

