import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Game from './pages/Game'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
  return (
    <div className='container mt-5'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/game/:player1/:player2" element={<Game />}/>
          <Route path="*" element={<NotFoundPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
