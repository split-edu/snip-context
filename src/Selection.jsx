import { useContext } from "react";
import BackgroundContext from "./BackgroundContext.jsx";

function Selection() {
    const { options } = useContext(BackgroundContext)
    return (
        <>
            <select>
                {options && options.length > 0 && options.map(option => (
                    <option className={'option-'+option} key={option} value={option}>{option}</option>
                ))}
            </select>
        </>
    );
}

export default Selection;