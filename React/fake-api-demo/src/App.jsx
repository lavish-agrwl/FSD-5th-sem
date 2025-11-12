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
      <h1>Fashion Show</h1>
      {data.map((item) =>
        Fashion({
          data
        })
      )}
    </div>
  );
}

export default App