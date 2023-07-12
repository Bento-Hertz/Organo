import './style.css';

const TextField = (props) => {

    //gets the value of the chosen atributte inside props
    const modifiedLabel = `${props.label}`;
    const modifiedPlaceholder = `${props.placeholder}`; 
    const updatedValue = `${props.value}`
    const isRequired = props.required

    //when the onChange event triggers, this arrow function will be called, which will send the current value of the field to the father component (form). This allows the form to collect all the updated data from all the other fields at the same time and then assign them to a single new object (collaborator).
    const changeValue = (event) => {
        //sends the value to the atributte whenChanged
        props.whenChanged(event.target.value);
    }

    return (
        <div className="text-field">
            <label>{modifiedLabel}</label>
            <input value={updatedValue} onChange={changeValue} required={isRequired} placeholder={modifiedPlaceholder}/>
        </div>
    );
}

export default TextField;