import React from 'react'
import Page from './components/Page'
import {  Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Page/>} /> 
      </Routes>
    </div>
  );
}

export default App
