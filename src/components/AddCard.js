const AddCard = () => {

    const inputEventHandler = (event) => {
        console.log(event.target.value);
    }

    return (
        <form>
            <label>Example Input</label>
            <input type="text" onChange={inputEventHandler}/>
        </form>
    );
}

export default AddCard;