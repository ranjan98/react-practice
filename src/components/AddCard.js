import { useState } from "react";

const AddCard = (props) => {

    // Using Multiple States - one way
    const [enteredInput, setEnteredInput] = useState('');
    const [enteredValue, setEnteredValue] = useState('');

    const inputEventHandler = (event) => {
        setEnteredInput(event.target.value);
    }

    const valueEventHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault(); // Prevents default behavior of submitting the form
        const cardData = {
            inputText: enteredInput,
            inputValue: enteredValue
        }
        // console.log(cardData);
        props.onAddNewCard(cardData);
        setEnteredInput('');
        setEnteredValue('');
    }

    return (
        <form onSubmit={submitHandler}>
            <label>Example Input</label>
            <input type="text" value={enteredInput} onChange={inputEventHandler} />
            <label>Example Value</label>
            <input type="text" value={enteredValue} onChange={valueEventHandler} />
            <button type="submit"> Add Card </button>
        </form>
    );
}

export default AddCard;