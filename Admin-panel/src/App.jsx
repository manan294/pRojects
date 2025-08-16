import React from 'react'
import Login from './components/Login'
import Register from './components/Register';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
       
      <Sidebar />

      <Routes>

{/* 
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />  */}


      </Routes>
    </div>
  );
}

export default App
