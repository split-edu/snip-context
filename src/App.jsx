import { useState } from 'react'
import './App.css'
import BackgroundContext from "./BackgroundContext.jsx";
import Selection from "./Selection.jsx";
import Jumbotron from "./Jumbotron.jsx";

function App() {
    const [current, setCurrent] = useState(BackgroundContext.defaultValue.current);
    const inital = {
        ...BackgroundContext.defaultValue,
        current
    };

    return (
        <>
            <BackgroundContext.Provider value={inital}>
                <div>
                    <h1>Sample Context</h1>
                </div>
                <div>
                    <Selection setCurrent={setCurrent}></Selection>
                </div>
                <div>
                    <Jumbotron></Jumbotron>
                </div>
            </BackgroundContext.Provider>
        </>
    )
}

export default App
