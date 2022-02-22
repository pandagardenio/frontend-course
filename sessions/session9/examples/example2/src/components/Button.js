import './Button.css';

function Button(props) {
    return (
        <button className="button button--primary" onClick={props.onClick}>{props.children}</button>
    )
}

export default Button;
