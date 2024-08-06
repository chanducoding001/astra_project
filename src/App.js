import React from 'react'
import './styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './auth/Login';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;