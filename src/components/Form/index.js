import './style.css';
import TextField from '../TextField';
import SuspendedList from '../SuspensedList';

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

    return (
        <section className='form'>
            <form>
                <h2>Fill the data to create the collaborator card</h2>
                <TextField label="Name" placeholder="Type your name"/>
                <TextField label="Role" placeholder="Type your role"/>
                <TextField label="Image" placeholder="Type the image address"/>
                <SuspendedList label="Team" items={teams}/>
            </form>
        </section>
    );

}

export default Form;