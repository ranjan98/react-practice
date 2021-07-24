import { useRef, useState } from "react";

const AddCard = (props) => {

    // Using Multiple States - one way
    // const [enteredInput, setEnteredInput] = useState('');
    // const [enteredValue, setEnteredValue] = useState('');

    // Using useRef instead of useState
    const enteredInputText = useRef();
    const enteredInputValue = useRef();

    // const inputEventHandler = (event) => {
    //     setEnteredInput(event.target.value);
    // }

    // const valueEventHandler = (event) => {
    //     setEnteredValue(event.target.value);
    // }

    const submitHandler = (event) => {
        event.preventDefault(); // Prevents default behavior of submitting the form
        const cardData = {
            // text: enteredInput,
            // value: enteredValue,
            text: enteredInputText.current.value,
            value: enteredInputValue.current.value
        }
        // console.log(cardData);
        props.onAddNewCard(cardData);
        // setEnteredInput('');
        // setEnteredValue('');
        enteredInputText.current.value = '';
        enteredInputValue.current.value = '';
    }

    return (
        <form onSubmit={submitHandler}>
            <label>Example Input</label>
            {/* <input type="text" value={enteredInput} onChange={inputEventHandler} /> */}
            <input type="text" ref={enteredInputText}/>
            <label>Example Value</label>
            {/* <input type="text" value={enteredValue} onChange={valueEventHandler} /> */}
            <input type="text" ref={enteredInputValue} />
            <button type="submit"> Add Card </button>
        </form>
    );
}

export default AddCard;