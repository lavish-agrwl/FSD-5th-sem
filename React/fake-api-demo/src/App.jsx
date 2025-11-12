import {useState, useEffect} from 'react'
import Fashion from './Components/Fashion'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setData(json))
  }, [])
  return (
    <div>
      {data.map(item => (
        Fashion({
          key: item.id,
          image: item.image,
          name: item.title,
          price: item.price
        })
      ))}
    </div>
  )
}

export default App