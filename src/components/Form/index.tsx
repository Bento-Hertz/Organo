import './style.css';
import TextField from '../TextField';
import DropdownList from '../DropdownList';
import Button from '../Button';
import { useState } from 'react';
import { ICollaborator } from '../../shared/interfaces/ICollaborator';

interface FormProps {
    onRegisteredCollaborator: (collaborator: ICollaborator) => void
    teamNames: string[]
}

const Form = (props: FormProps) => {

    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');
    const [date, setDate] = useState('');

    //When the form is submited, this function will collect all the updated data from the fields and put them into a single object (collaborator). It also prevents the page from refreshing.
    const onSave = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.onRegisteredCollaborator({
            name,
            role,
            image,
            team,
            date
        })
        setName('');
        setRole('');
        setImage('');
        setTeam('');
        setDate('');
    }

    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Fill the data to create a new collaborator card</h2>
                <TextField
                    required={true} 
                    label="Name" 
                    placeholder="Type your name"
                    value={name}
                    //replaces the current value by the new updated value from the child component (textField)
                    whenChanged={value => setName(value)}
                 />
                <TextField
                    required={true} 
                    label="Role" 
                    placeholder="Type your role"
                    value={role} 
                    whenChanged={value => setRole(value)}
                />
                <TextField 
                    required={true}
                    label="Image" 
                    placeholder="Type the image address"
                    value={image} 
                    whenChanged={value => setImage(value)}
                />
                <TextField
                    required={true} 
                    label="Initial date"
                    value={date} 
                    whenChanged={value => setDate(value)}
                    type="date"
                />
                <DropdownList 
                    required={true} 
                    label="Team"
                    teamNames={props.teamNames}
                    value={team}
                    whenChanged={value => setTeam(value)}
                />
                <Button>
                    Create Card
                </Button>
            </form>
        </section>
    );

}

export default Form;