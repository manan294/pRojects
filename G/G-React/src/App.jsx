import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Page from './components/Page.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Page />} />

        
      </Routes>
    </div>
  )
}

export default App
