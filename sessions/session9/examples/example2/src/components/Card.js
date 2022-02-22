import './Card.css';

function Card(props) {
    return (
        <div className="card">
            <h3 className="card__title">{props.title}</h3>
            <div className="card__content">
                {props.children}
            </div>
        </div>
    );
}

export default Card;
