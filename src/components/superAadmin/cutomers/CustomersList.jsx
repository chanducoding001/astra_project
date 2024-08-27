import React from 'react'
import ReUseTable from '../../../reusables/ReUseTable';

const CustomersList = () => {
  
  const columns = [
    { id: 'id', label: 'S.NO', minWidth: 50 },
    { id: 'userNo', label: 'USER NO.', minWidth: 70 },
    { id: 'email', label: 'EMAIL', minWidth: 150 },
    {id:'details',label:'',minWidth:150},
    { id: 'status', label: 'STATUS', minWidth: 100 },
  ];
  const rows = [
      { id: 1,userNo:'0000001', email: 'chandu@gmail.com', details:'Details', status: 'Approved' },
      { id: 2,userNo:'0000002', email: 'manikiran@gmail.com', details:'Details', status: 'Suspended' },
    ];
    
      return (
        <>
          <ReUseTable rows={rows} columns={columns} screen='admin' addBtn={false} title='Customers List'/>
        </>
      );
}

export default CustomersList;