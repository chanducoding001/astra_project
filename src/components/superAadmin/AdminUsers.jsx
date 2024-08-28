import React from 'react'
import ReUseTable from '../../reusables/ReUseTable';

const AdminUsers = () => {

  const columns = [
    { id: 'id', label: 'S.NO', minWidth: 50 },
    { id: 'userNo', label: 'USER NO.', minWidth: 70 },
    { id: 'email', label: 'EMAIL', minWidth: 150 },
    {id:'role',label:'ROLE',minWidth:150},
    { id: 'adminUsersAction', label: 'Action', minWidth: 100 },
  ];
  const rows = [
      { id: 1,userNo:'0000001', email: 'chandu@gmail.com', role:'Admin', adminUsersAction: 'Approved' },
      { id: 2,userNo:'0000002', email: 'manikiran@gmail.com', role:'User', adminUsersAction: 'AdminUsers' },
    ];

  return (
    <>
    <h2>Admin Users</h2>
    {/* <ReUseTable rows={rows} columns={columns} screen='adminUsers' addBtn={false} title='Admin User List'/> */}
    </>
  )
}

export default AdminUsers;