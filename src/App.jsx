import { useState } from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import {CardGrid} from "./components/CardGrid.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <CardGrid></CardGrid>
    </>
  )
}

export default App
