import React, { useEffect, useState } from 'react'
import './styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './auth/Login';
import SignUp from './auth/SignUp';
import ForgotPassword from './auth/ForgotPassword';
import DummyHome from './auth/DummyHome';
import AdminLayout from './layouts/AdminLayout';
import Users from './components/admin/users/Users';
import Projects from './components/admin/projects/Projects';
import AddPassword from './components/endUser/AddPassword';
import EndUserProjects from './components/endUser/EndUserProjects';
import CustomersList from './components/superAadmin/cutomers/CustomersList';
import AdminUsers from './components/superAadmin/AdminUsers';
import AdminProjects from './components/superAadmin/AdminProjects';
import Suspended from './components/superAadmin/cutomers/Suspended';

const App = () => {
  const [astraUser,setAstraUser] = useState(null);

  useEffect(()=>{
    const user = +localStorage.getItem('astraUser');
    setAstraUser(user);
  },[astraUser])
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signUp' element={<SignUp/>}/>
      <Route path='/home' element={<DummyHome/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/forgotPassword' element={<ForgotPassword/>}/>
      <Route path='/addPassword' element={<AddPassword/>}/>
      <Route path='/' element={<AdminLayout/>}>
      {/* <Route index element={<Users/>}/> */}
      {/* <Route index element={<EndUserProjects/>}/> */}
        {
          +astraUser === 1 ? <Route index element={<CustomersList/>}/>:
          +astraUser === 2 ? <Route index element={<Users/>}/>
          : +astraUser === 3 ? <Route index element={<EndUserProjects/>}/>
          :null
        }
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/superAdminUsers' element={<AdminUsers/>}/>
        <Route path='/superAdminProjects' element={<AdminProjects/>}/>
        <Route path='/superAdminSuspended' element={<Suspended/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;