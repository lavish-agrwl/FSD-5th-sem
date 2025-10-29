import React from 'react'
import Card from "./Components/Card"
import Navbar from "./Components/Navbar"

function App() {
  return (
    <div>
      <Navbar />
      <Card name="Card 1" />
      <br />
      <Card name="Card 2" />
      <br />
      <Card name="Card 3" />

    </div>
  )
}

export default App