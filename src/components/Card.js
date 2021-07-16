import './Card.css';
import { useState } from 'react';

function Card(props){
    const [outputText, setOutputText] = useState(props.text);
    const changeText = () => {
        setOutputText("Changed Text using State");
    }
    return (
        <div>
            <h4 className = "card-shape">{outputText}</h4>
            <button onClick={changeText}>Change Text</button>
        </div>
    );
}

export default Card;