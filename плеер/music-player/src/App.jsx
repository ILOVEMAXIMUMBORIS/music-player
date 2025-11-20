import { useState } from 'react'
import './App.css'
import eblan from './assets/m1000x1000.svg'
import playbtn from './assets/playbtn.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='Search-bg'>
        <p className='Search'>Ищите тысячи песен, артистов, альбомов и т.д.</p>
      </div>
      <div className="decoration-left">
        <p>.</p>
      </div>
      <div className="decoration-right">
        <p>.</p>
      </div>
      <div>
        <div className="cards">
          <div className="card">
            <img src={eblan} alt="" className='Card-Image'/>
            <div className="card-text">
              <p>Язык для славян</p>
              <p>Научно-технический рэп</p>
              <img src={playbtn} alt="" className='playbtn'/>
            </div>
          </div>
          <div className="card">
            <img src={eblan} alt="" className='Card-Image'/>
            <div className="card-text">
              <p>Язык для славян</p>
              <p>Научно-технический рэп</p>
              <img src={playbtn} alt="" className='playbtn'/>
            </div>
          </div>
          <div className="card">
            <img src={eblan} alt="" className='Card-Image'/>
            <div className="card-text">
              <p>Язык для славян</p>
              <p>Научно-технический рэп</p>
              <img src={playbtn} alt="" className='playbtn'/>
            </div>
          </div>
          <div className="card">
            <img src={eblan} alt="" className='Card-Image'/>
            <div className="card-text">
              <p>Язык для славян</p>
              <p>Научно-технический рэп</p>
              <img src={playbtn} alt="" className='playbtn'/>
            </div>
          </div>
          <div className="card">
            <img src={eblan} alt="" className='Card-Image'/>
            <div className="card-text">
              <p>Язык для славян</p>
              <p>Научно-технический рэп</p>
              <img src={playbtn} alt="" className='playbtn'/>
            </div>
          </div>
          <div className="card">
            <img src={eblan} alt="" className='Card-Image'/>
            <div className="card-text">
              <p>Язык для славян</p>
              <p>Научно-технический рэп</p>
              <img src={playbtn} alt="" className='playbtn'/>
            </div>
          </div>
          <div className="card">
            <img src={eblan} alt="" className='Card-Image'/>
            <div className="card-text">
              <p>Язык для славян</p>
              <p>Научно-технический рэп</p>
              <img src={playbtn} alt="" className='playbtn'/>
            </div>
          </div>
          <div className="card">
            <img src={eblan} alt="" className='Card-Image'/>
            <div className="card-text">
              <p>Язык для славян</p>
              <p>Научно-технический рэп</p>
              <img src={playbtn} alt="" className='playbtn'/>
            </div>
          </div>
          <div className="card">
            <img src={eblan} alt="" className='Card-Image'/>
            <div className="card-text">
              <p>Язык для славян</p>
              <p>Научно-технический рэп</p>
              <img src={playbtn} alt="" className='playbtn'/>
            </div>
          </div>
        </div>
        <div className="player">
          <div className="card">
            <img src={eblan} alt="" className='Card-Image'/>
            <div className="card-text">
              <p>Язык для славян</p>
              <p>Научно-технический рэп</p>
            </div>
            <p>🔊</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
