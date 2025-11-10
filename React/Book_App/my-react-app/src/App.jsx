import React from 'react'
import Book from './components/book.jsx'
import Navbar from './components/Navbar.jsx'   // ✅ IMPORT NAVBAR
import './components/navbar.css'              // ✅ IMPORT NAVBAR CSS

function App() {

  return (
    <>
      <Navbar />   {/* ✅ USE NAVBAR */}

      <div id='ish'>
        <Book/>
        <Book/>
        <Book/>
      </div>
    </>
  )
}

export default App
