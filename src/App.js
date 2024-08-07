import React from 'react'
import './styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './auth/Login';
import SuccessPage from './auth/SuccessPage';
import SignUp from './auth/SignUp';
import ForgotPassword from './auth/ForgotPassword';
import DummyHome from './auth/DummyHome';
import AdminLayout from './layouts/AdminLayout';
import Users from './components/admin/Users';
import Projects from './components/admin/Projects';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signUp' element={<SignUp/>}/>
      <Route path='/home' element={<DummyHome/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/forgotPassword' element={<ForgotPassword/>}/>
      <Route path='/' element={<AdminLayout/>}>
        <Route index element={<Users/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;