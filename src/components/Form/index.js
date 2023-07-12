import './style.css';
import TextField from '../TextField';
import DropdownList from '../DropdownList';
import Button from '../Button';
import { useState } from 'react';

const Form = () => {

    const teams = [
        'Programming',
        'Front-End',
        'Data Science',
        'Devops',
        'UX and Design',
        'Mobile',
        'Innovation and Managing'
    ]

    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    const onSave = (event) => {
        event.preventDefault();
        console.log('submited => ',name,role,image,team);
    }

    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Fill the data to create the collaborator card</h2>
                <TextField
                    required={true} 
                    label="Name" 
                    placeholder="Type your name"
                    value={name}
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
                    items={teams}
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