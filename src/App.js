import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

function App() {

  const teams = [
    {
      name: 'Programming',
      primaryColor: '#57c278',
      secondaryColor: '#d9f7e9'
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF',
    },
    {
        name: 'Data Science',
        primaryColor: '#A6D157',
        secondaryColor: '#F0F8E2',
    },
    {
        name: 'Devops',
        primaryColor: '#E06B69',
        secondaryColor: '#FDE7E8',
    },
    {
        name: 'UX and Design',
        primaryColor: '#D86EBF',
        secondaryColor: '#FAE5F5',
    },
    {
        name: 'Mobile',
        primaryColor: '#FEBA05',
        secondaryColor: '#FFF5D9',
    },
    {
        name: 'Innovation and Management',
        primaryColor: '#FF8A29',
        secondaryColor: '#FFEEDF',
    }
  ]

  const [collaborators, setCollaborators] = useState([]);

  const onNewAddedCollaborator = (collaborator) => {
    console.log(collaborator);
    //this will add another collaborator to the end of the list instead of replacing the alredy existing collaborators in the list
    setCollaborators([...collaborators, collaborator]);
  }

  return (
    <div className="App">
      <Banner />
      <Form teamNames={teams.map(team => team.name)} onRegisteredCollaborator={collaborator => onNewAddedCollaborator(collaborator)}/>
      { teams.map(team => <Team 
        key={team.name} 
        team={team}
        collaborators={collaborators.filter(collaborator => collaborator.team === team.name)}
      />) }
    </div>
  );
}

export default App;
