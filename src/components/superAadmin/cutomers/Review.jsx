import React from 'react'
import ReUseTable from '../../../reusables/ReUseTable';

const Review = () => {
    const columns = [
        { id: 'id', label: 'S.NO', minWidth: 50 },
        { id: 'userNo', label: 'USER NO.', minWidth: 70 },
        { id: 'email', label: 'EMAIL', minWidth: 150 },
        // {id:'role',label:'ROLE',minWidth:150},
        { id: 'reviewAction', label: 'Action', minWidth: 100 },
      ];
      const rows = [
          { id: 1,userNo:'0000001', email: 'chandu@gmail.com',  reviewAction: 'Approved' },
          { id: 2,userNo:'0000002', email: 'manikiran@gmail.com', reviewAction: 'Suspended' },
        ];
  return (
    <>
    <ReUseTable rows={rows} columns={columns} screen='review' addBtn={false} title='To Review'/>
    </>
  )
}

export default Review;