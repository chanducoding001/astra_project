import React from 'react'
import ReUseTable from '../../../reusables/ReUseTable';

const Suspended = () => {

  const columns = [
    { id: 'id', label: 'S.NO', minWidth: 50 },
    { id: 'userNo', label: 'USER NO.', minWidth: 70 },
    { id: 'email', label: 'EMAIL', minWidth: 150 },
    {id:'role',label:'ROLE',minWidth:150},
    { id: 'suspendedAction', label: 'Action', minWidth: 100 },
  ];
  const rows = [
      { id: 1,userNo:'0000001', email: 'chandu@gmail.com', role:'Admin', suspendedAction: 'Approved' },
      { id: 2,userNo:'0000002', email: 'manikiran@gmail.com', role:'User', suspendedAction: 'Suspended' },
    ];

  return (
    <>
    <ReUseTable rows={rows} columns={columns} screen='suspended' addBtn={false} title='Suspended'/>
    </>
  )
}

export default Suspended;