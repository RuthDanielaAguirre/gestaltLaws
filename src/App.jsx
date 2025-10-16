import { useState } from 'react'
import './App.css'

function App() {
const [count, setCount] = useState(100)

  return (
    <div className="App">
      <div>
        <h1>Leyes de Gestalt</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Proyecto educativo sobre las Leyes de Gestalt en diseño web
        </p>
      </div>
    </div>
  )
}

export default App