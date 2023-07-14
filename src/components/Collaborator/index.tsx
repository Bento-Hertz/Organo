import { ICollaborator } from '../../shared/interfaces/ICollaborator';
import './style.css';

interface CollaboratorProps { 
    primaryColor: string
    collaborator: ICollaborator
}

const Collaborator = (props: CollaboratorProps) => {
    const primaryColor = {backgroundColor: props.primaryColor};

    return (
        <div className='collaborator'>
            <div className='header' style={primaryColor}>
                <img src={props.collaborator.image} alt={props.collaborator.name}/>
            </div>
            <div className='footer'>
                <h4>{props.collaborator.name}</h4>
                <h5>{props.collaborator.role}</h5>
                <h5>{props.collaborator.date}</h5>
            </div>
        </div>
    );
}

export default Collaborator;