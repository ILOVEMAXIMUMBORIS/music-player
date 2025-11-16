import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import eblan from './assets/m1000x1000.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='Search-bg'>
        <p className='Search'>Ищите тысячи песен, артистов, альбомов и т.д.</p>
      </div>
      <div>
        <div className="cards">
          <div className="card">
            <img src={eblan} alt="" className='Card-Image'/>
            <div className="card-text">
              <p>Язык для славян</p>
              <p>Научно-технический рэп</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
