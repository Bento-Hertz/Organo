import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';

function App() {

  const [collaborators, setCollaborators] = useState([]);

  const onNewAddedCollaborator = (collaborator) => {
    console.log(collaborator);
    //this will add another collaborator to the end of the list instead of replacing the alredy existing collaborators in the list
    setCollaborators([...collaborators, collaborator]);
  }

  return (
    <div className="App">
      <Banner />
      <Form onRegisteredCollaborator={collaborator => onNewAddedCollaborator(collaborator)}/>
    </div>
  );
}

export default App;
