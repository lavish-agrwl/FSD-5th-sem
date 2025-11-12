import React, {useState, useEffect} from 'react'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/women%27s%20clothing')
      .then(res=>res.json())
      .then(json=>setData(json))
  }, [])
  return (
    <div>

    </div>
  )
}

export default App