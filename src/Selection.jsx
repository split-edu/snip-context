import { useContext } from "react";
import BackgroundContext from "./BackgroundContext.jsx";

function Selection({setCurrent}) {
    const { options } = useContext(BackgroundContext);

    function updateCurrent (e) {
        setCurrent(e.target.value);
    }
    return (
        <>
            <select onChange={updateCurrent}>
                {options && options.length > 0 && options.map(option => (
                    <option className={'option-'+option} key={option} value={option}>{option}</option>
                ))}
            </select>
        </>
    );
}

export default Selection;