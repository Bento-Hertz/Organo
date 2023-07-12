import Collaborator from '../Collaborator';
import './style.css';

const Team = (props) => {

    const backgroundColor = {backgroundColor: props.team.secondaryColor};
    const borderColor = {borderColor: props.team.primaryColor};

    return (
        (props.collaborators.length > 0) ? <section className='team' style={backgroundColor}>
            <h3 style={borderColor}>{props.team.name}</h3>
            <div className='collaborators'>
                { props.collaborators.map(collaborator => <Collaborator key={collaborator.name} collaborator={collaborator} backgroundColor={props.team.primaryColor}/>) }
            </div>
        </section>
        : ''
    );
}

export default Team;