import React from 'react'
import { NavLink } from 'react-router-dom';
import ReUseTable from '../../reusables/ReUseTable';

const AdminProjects = () => {
  const projectLinkStyles = {borderBottom:'1px solid blue',color:'blue'}
  const rows = [
    { id: 1,
      projRefNo:'Pipe-1', 
      projectName: 'PWC-st MATTHEWS', 
      buisiness:'Pipework.co',
      creator: 'John', 
      dateCreated: 'March 6/24',
      lastModified:'March 6/24',
      version:'A',
      projectLink:<NavLink to='/' style={projectLinkStyles}>go to project</NavLink>
    },
    { id: 2,
      projRefNo:'BD-001', 
      projectName: 'PWC-st Circle', 
      buisiness:'Pipework.co',
      creator: 'Nick', 
      dateCreated: 'March 6/24',
      lastModified:'March 6/24',
      version:'A',
      projectLink:<NavLink to='/' style={projectLinkStyles}>go to project</NavLink>
    },
    { id: 3,
      projRefNo:'BD-001', 
      projectName: 'PWC-st Circle', 
      buisiness:'Build.USA',
      creator: 'Jack', 
      dateCreated: 'March 6/24',
      lastModified:'March 6/24',
      version:'B',
      projectLink:<NavLink to='/' style={projectLinkStyles}>go to project</NavLink>
    },
  ];

  const columns = [
    { id: 'id', label: 'S.NO', minWidth: 50 },
    { id: 'projRefNo', label: 'PROJ.REF.NO.', minWidth: 70 },
    { id: 'projectName', label: 'PROJECT NAME', minWidth: 150 },
    { id: 'buisiness', label: 'BUISINESS', minWidth: 150 },
    { id: 'creator', label: 'CREATOR', minWidth: 50 },
    { id: 'dateCreated', label: 'DATE CREATED', minWidth: 50 },
    { id: 'lastModified', label: 'LAST MODIFIED', minWidth: 50 },
    { id: 'version', label: 'VERSION', minWidth: 50 },
    { id: 'projectLink', label: 'PROJECT LINK', minWidth: 100 },
  ];
  return (
    <>
    {/* <h2>Projects</h2> */}
    <ReUseTable rows={rows} columns={columns} screen='adminProjects' addBtn={false} title='Projects'/>
    </>
  )
}

export default AdminProjects;