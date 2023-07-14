import './style.css';

interface textFieldProps {
    whenChanged: (value: string) => void,
    placeholder?: string,
    label: string,
    value: string,
    required?: boolean
    type?: "date"
}

const TextField = ({ whenChanged, placeholder, label, value, required = false, type }: textFieldProps) => {

    //gets the value of the chosen atributte inside props (using javascript)
    // const modifiedLabel = `${props.label}`;
    // const modifiedPlaceholder = `${props.placeholder}`; 
    // const updatedValue = `${props.value}`
    // const isRequired = props.required

    //when the onChange event triggers, this arrow function will be called, which will send the current value of the field to the father component (form). This allows the form to collect all the updated data from all the other fields at the same time and then assign them to a single new object (collaborator).
    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        //sends the value to the atributte whenChanged
        whenChanged(event.target.value);
    }

    return (
        <div className="text-field">
            <label>{label}</label>
            <input 
                value={value} 
                onChange={changeValue} 
                required={required} 
                placeholder={placeholder}
                type={type}
            />
        </div>
    );
}

export default TextField;