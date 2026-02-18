//useState/src/App.jsx
import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import LikeButton from './Like'
import MeEncantaButton from '../MeEncanta'
import ImputName from './InputName'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <button onClick={() => setCount(count + 1)}> count is {count}</button>
      <Counter/>
      <LikeButton/>
      <MeEncantaButton/>
      <ImputName/>
      </div>

    </>
  )
}

export default App
