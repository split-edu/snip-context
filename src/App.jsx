import { useState } from 'react'
import './App.css'
import BackgroundContext from "./BackgroundContext.jsx";
import Selection from "./Selection.jsx";
import Jumbotron from "./Jumbotron.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BackgroundContext.Provider value={BackgroundContext.defaultValue}>
            <div>
                <h1>Sample Context</h1>
            </div>
            <div>
                <Selection></Selection>
            </div>
            <div>
                <Jumbotron></Jumbotron>
            </div>
        </BackgroundContext.Provider>
    </>
  )
}

export default App
