import './style.css';

const TextField = (props) => {

    const modifiedLabel = `${props.label}`;
    const modifiedPlaceholder = `${props.placeholder}`; 
    

    return (
        <div className="text-field">
            <label>{modifiedLabel}</label>
            <input value={props.value} onChange={event => props.whenChanged(event.target.value)} required={props.required} placeholder={modifiedPlaceholder}/>
        </div>
    );
}

export default TextField;