import { useState } from 'react'
import './App.module.css'
import Cafeinfo from './Cafeinfo.tsx'
import Notification from './Notification.tsx'
import VoteOptions from './VoteOptions.tsx'
import VoteStats from './VoteStats.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cafeinfo />
      <Notification />
      <VoteOptions />
      <VoteStats />
    </>
  )
}

export default App
