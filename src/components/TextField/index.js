import './style.css';

const TextField = (props) => {

    const modifiedLabel = `${props.label}`;
    const modifiedPlaceholder = `${props.placeholder}`;

    return (
        <div className="text-field">
            <label>{modifiedLabel}</label>
            <input placeholder={modifiedPlaceholder}/>
        </div>
    );
}

export default TextField;