import Card from './components/Card';
import AddCard from './components/AddCard';
import './App.css';

function App() {

  const textArr = ["This is a text", "This is another text", "This is how you send props"];
  const valArr = [20.10, 300, 40.92];
  const items = [
    {
      text: textArr[0],
      value: valArr[0]
    },
    {
      text: textArr[1],
      value: valArr[1]
    },
    {
      text: textArr[2],
      value: valArr[2]
    }
  ]

  const addCardHandler = (enteredCardData) => {
    // We can copy data this way as well
    // const cardData = {...enteredCardData};
    const cardData = enteredCardData;
    console.log(enteredCardData);
  }
  return (
    <div>
      <h2> Something Here </h2>
      <AddCard onAddNewCard={addCardHandler} />
      {items.map(item => <Card text={item.text} val={item.value} />)}
    </div>
  );
}

export default App;
