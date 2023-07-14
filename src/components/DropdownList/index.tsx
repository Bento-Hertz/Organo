import './style.css';

interface DropdownListProps {
    whenChanged: (value: string) => void
    label: string
    required: boolean
    value: string
    teamNames: string[]
}

const DropdownList = (props : DropdownListProps) => {

    const updatedValue = `${props.value}`
    const isRequired = props.required

    const changeValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
        props.whenChanged(event.target.value);
    }

    return (
        <div className='dropdown-list'>
            <label>{props.label}</label>
            <select onChange={changeValue} required={isRequired} value={updatedValue}>
                <option value=""></option>
                { props.teamNames.map(name => <option key={name}>{name}</option>) }
            </select>
        </div>
    );
}

export default DropdownList;