import Card from './components/Card';
import AddCard from './components/AddCard';
import './App.css';
import { useState } from 'react';

const initialItems = [
  {
    id: '1',
    text: "This is a text",
    value: '20.10'
  },
  {
    id: '2',
    text: "This is another text",
    value: '300'
  },
  {
    id: '3',
    text: "This is how you send props",
    value: '40.92'
  }
]

function App() {

  const [items, setItems] = useState(initialItems);

  const addCardHandler = (enteredCardData) => {
    // We can copy data this way as well
    // const cardData = {...enteredCardData};
    // console.log(enteredCardData);
    setItems((prevItems) => {
      return [...prevItems, enteredCardData];
    });
  }
  return (
    <div>
      <h2> Something Here </h2>
      <AddCard onAddNewCard={addCardHandler} />
      {items.map((item, index) => <Card text={item.text} val={item.value} key={index} />)}
    </div>
  );
}

export default App;
