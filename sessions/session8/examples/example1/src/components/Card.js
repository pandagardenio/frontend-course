import './Card.css';

function Card(props) {
    return (
        <div className="card">
            <h3 className="card__title">{props.title}</h3>
            <p class="card__content">{props.content}</p>
        </div>
    );
}

export default Card;
