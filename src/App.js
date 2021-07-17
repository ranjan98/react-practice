import Card from './components/Card';
import AddCard from './components/AddCard';
import './App.css';

function App() {
  const textArr = ["This is a text", "This is another text", "This is how you send props"];
  return (
    <div>
      <h2> Something Here </h2>
      <AddCard />
      <Card text = {textArr[0]} />
      <Card text = {textArr[1]} />
      <Card text = {textArr[2]} />
    </div>
  );
}

export default App;
