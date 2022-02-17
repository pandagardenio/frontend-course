import './Button.css';

function Button(props) {
    return (
        <button className="button button--primary">{props.content}</button>
    )
}

export default Button;
