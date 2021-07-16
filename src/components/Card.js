import './Card.css';
function Card(props){
    return (
        <div>
            <h4 className = "card-shape">{props.text}</h4>
        </div>
    );
}

export default Card;