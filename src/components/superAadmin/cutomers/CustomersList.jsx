import React from 'react'
import ReUseTable from '../../../reusables/ReUseTable';

const CustomersList = () => {
    const rows = [
        { id: 1,userNo:'0000001', email: 'chandu@gmail.com', age: 28, status: 'Approved' },
        { id: 2,userNo:'0000002', email: 'manikiran@gmail.com', age: 32, status: 'Suspended' },
      ];
    
      const columns = [
        { id: 'id', label: 'S.NO', minWidth: 50 },
        { id: 'userNo', label: 'USER NO.', minWidth: 70 },
        { id: 'email', label: 'EMAIL', minWidth: 150 },
        { id: 'status', label: 'STATUS', minWidth: 100 },
      ];
    
      return (
        <>
          <ReUseTable rows={rows} columns={columns} screen='admin' addBtn={false} title='Customers List'/>
        </>
      );
}

export default CustomersList;