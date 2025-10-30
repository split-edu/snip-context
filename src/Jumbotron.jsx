import { useContext } from "react";
import BackgroundContext from "./BackgroundContext.jsx";
import './Background.css';

function Jumbotron() {
    const { current } = useContext(BackgroundContext);

    return (
        <div className={current}>
            <div><h2>Life is great!</h2></div>
            <p>
                Attitude is a little thing that makes a big difference.
                <small><i>W. Churchill</i></small>
            </p>
        </div>
    )
}

export default Jumbotron;