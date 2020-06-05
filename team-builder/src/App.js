import React, {useState} from 'react';
import './App.css';
import Form from './components/form/form';
import Members from './components/members/members';

function App() {
  const [members, setMembers] = useState([]);
  
  const addMem = memObj => {
    setMembers([...members, {...memObj, id: Date.now() }])
  } 

  return (
    <div className="App">
        <h1>Members Directory</h1>
        <Form addMem={addMem} />
        <Members members={members} />
    </div>
  );
}

export default App;
