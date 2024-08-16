import React, { useState } from 'react'

const useActiveRow = (data=null) => {
    const [activeRow, setActiveRow] = useState(data);
  return [activeRow,setActiveRow];
}

export default useActiveRow;