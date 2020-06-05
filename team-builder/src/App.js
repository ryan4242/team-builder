import React, {useState} from 'react';
import './App.css';
import Form from './components/form';
import Members from './components/members';

function App() {
  const [members, setMembers] = useState([{id: 1, fullName: 'Ryan McInnis', email: 'ryan@email.com', role: 'Dude'}]);
  
  const addMem = memObj => {
    setMembers([...members, {...memObj, id: Date.now() }])
  } 

  return (
    <div className="App">
      <header className="App-header">
        <Form addMem={addMem} />
        <Members members={members} />
      </header>
    </div>
  );
}

export default App;
