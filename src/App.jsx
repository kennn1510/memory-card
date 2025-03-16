import './App.css'
import Header from "./components/Header.jsx";
import {CardGrid} from "./components/CardGrid.jsx";
import {useState} from "react";

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <CardGrid score={score} setScore={setScore} bestScore={bestScore} setBestScore={setBestScore} />
    </>
  )
}
