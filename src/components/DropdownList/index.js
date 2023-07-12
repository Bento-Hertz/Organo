import './style.css';

const DropdownList = (props) => {

    const updatedValue = `${props.value}`
    const isRequired = props.required

    const changeValue = (event) => {
        props.whenChanged(event.target.value);
    }

    return (
        <div className='dropdown-list'>
            <label>{props.label}</label>
            <select onChange={changeValue} required={isRequired} value={updatedValue}>
                { props.teamNames.map(name => <option key={name}>{name}</option>) }
            </select>
        </div>
    );
}

export default DropdownList;