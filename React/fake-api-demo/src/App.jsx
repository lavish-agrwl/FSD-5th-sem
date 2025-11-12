import {useState, useEffect} from 'react'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
  }, [])
  return (
    <div>

    </div>
  )
}

export default App