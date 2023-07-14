import { ICollaborator } from '../../shared/interfaces/ICollaborator';
import { ITeam } from '../../shared/interfaces/ITeam';
import Collaborator from '../Collaborator';
import './style.css';

interface TeamProps {
    team: ITeam
    collaborators: ICollaborator[]
}

const Team = (props: TeamProps) => {

    const backgroundColor = {backgroundColor: props.team.secondaryColor};
    const borderColor = {borderColor: props.team.primaryColor};
    
    return (
        (props.collaborators.length > 0) ? <section className='team' style={backgroundColor}>
            <h3 style={borderColor}>{props.team.name}</h3>
            <div className='collaborators'>
                { props.collaborators.map(collaborator => <Collaborator 
                    key={collaborator.name} 
                    collaborator={collaborator} 
                    primaryColor={props.team.primaryColor}
                />) }
            </div>
        </section>
        : <></>
    );
}

export default Team;