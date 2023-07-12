import './style.css';

const Team = (props) => {

    const backgroundColor = {backgroundColor: props.team.secondaryColor};
    const borderColor = {borderColor: props.team.primaryColor};

    return (
        <section className='team' style={backgroundColor}>
            <h3 style={borderColor}>{props.team.name}</h3>
        </section>
    );
}

export default Team;