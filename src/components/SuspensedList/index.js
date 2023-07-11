import './style.css';

const SuspendedList = (props) => {
    return (
        <div className='suspended-list'>
            <label>{props.label}</label>
            <select>
                { props.items.map(item => { 
                    return <option key={item}>{item}</option>;
                })}
            </select>
        </div>
    );
}

export default SuspendedList;