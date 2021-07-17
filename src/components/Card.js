import './Card.css';
import { useState } from 'react';

function Card(props){
    // the useState function is defined in react, which always return an array of size 2
    const [outputText, setOutputText] = useState(props.text);
    const changeText = () => {
        // Once this function is called, it will update the value and the Card function will be called again to re-render and show the updated value on the webpage
        setOutputText("Changed Text using State");
    }
    return (
        <div>
            <h4 className = "card-shape">{outputText + " " + props.val}</h4>
            <button onClick={changeText}>Change Text</button>
        </div>
    );
}

export default Card;