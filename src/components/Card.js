import "./card.css";

function Card(props) {
  return (
    <div className="card">
      <p>{props.company}</p>item
      <p>{props.city}</p>
      <p>{props.country}</p>
    </div>
  );
}

export default Card;
