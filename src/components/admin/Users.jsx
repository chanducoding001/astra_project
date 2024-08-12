import React from 'react';
import ReUseTable from '../../reusables/ReUseTable';

const Users = () => {
  const rows = [
    { id: 1,userNo:'0000001', email: 'Chandu', age: 28, role: 'Admin' },
    { id: 2,userNo:'0000002', email: 'Mani Kiran', age: 32, role: 'User' },
  ];

  const columns = [
    { id: 'id', label: 'S.NO', minWidth: 50 },
    { id: 'userNo', label: 'USER NO.', minWidth: 70 },
    { id: 'email', label: 'EMAIL', minWidth: 150 },
    { id: 'role', label: 'ROLE', minWidth: 50 },
    { id: 'action', label: 'ACTION', minWidth: 100 },
  ];

  return (
    <>
      <ReUseTable rows={rows} columns={columns} screen='users' addBtn={true} title='User List'/>
    </>
  );
};

export default Users;
