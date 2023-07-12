import './style.css';

const Collaborator = (props) => {

    const backgroundColor = {backgroundColor: props.backgroundColor};

    return (
        <div className='collaborator'>
            <div className='header' style={backgroundColor}>
                <img src={props.collaborator.image} alt={props.collaborator.name}/>
            </div>
            <div className='footer'>
                <h4>{props.collaborator.name}</h4>
                <h5>{props.collaborator.role}</h5>
            </div>
        </div>
    );
}

export default Collaborator;