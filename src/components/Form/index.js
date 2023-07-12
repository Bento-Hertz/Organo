import './style.css';
import TextField from '../TextField';
import DropdownList from '../DropdownList';
import Button from '../Button';
import { useState } from 'react';

const Form = (props) => {

    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    //When the form is submited, this function will collect all the updated data from the fields and put them into a single object (collaborator). It also prevents the page from refreshing.
    const onSave = (event) => {
        event.preventDefault();
        props.onRegisteredCollaborator({
            name,
            role,
            image,
            team
        })
        setName('');
        setRole('');
        setImage('');
        setTeam('');
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
                    label="Image" 
                    placeholder="Type the image address"
                    value={image} 
                    whenChanged={value => setImage(value)}
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