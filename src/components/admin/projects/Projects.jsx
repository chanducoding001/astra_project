import React from 'react'
import ReUseTable from '../../../reusables/ReUseTable';
import { NavLink } from 'react-router-dom';

const Projects = () => {
  const projectLinkStyles = {borderBottom:'1px solid blue',color:'blue'}
  const rows = [
    { id: 1,
      projRefNo:'Pipe-1', 
      projectName: 'PWC-st MATTHEWS', 
      creator: '0000001', 
      dateCreated: 'March 6/24',
      lastModified:'March 6/24',
      version:'A',
      projectLink:<NavLink to='/' style={projectLinkStyles}>go to project</NavLink>
    },
    { id: 2,
      projRefNo:'BD-001', 
      projectName: 'PWC-st Circle', 
      creator: '0000001', 
      dateCreated: 'March 6/24',
      lastModified:'March 6/24',
      version:'A',
      projectLink:<NavLink to='/' style={projectLinkStyles}>go to project</NavLink>
    },
    
    
  ];

  const columns = [
    { id: 'id', label: 'S.NO', minWidth: 50 },
    { id: 'projRefNo', label: 'PROJ.REF.NO.', minWidth: 70 },
    { id: 'projectName', label: 'PROJECT NAME', minWidth: 150 },
    { id: 'creator', label: 'CREATOR', minWidth: 50 },
    { id: 'dateCreated', label: 'DATE CREATED', minWidth: 100 },
    { id: 'lastModified', label: 'LAST MODIFIED', minWidth: 100 },
    { id: 'version', label: 'VERSION', minWidth: 100 },
    { id: 'projectLink', label: 'PROJECT LINK', minWidth: 100 },
  ];
  return (
    <>
    {/* <h2>Projects</h2> */}
    <ReUseTable rows={rows} columns={columns} screen='projects' addBtn={false} title='Projects'/>
    </>
  )
}

export default Projects;