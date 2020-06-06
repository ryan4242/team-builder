import React, {useState} from 'react';
import './App.css';
import Form from './components/form/form';
import Member from './components/member/member';

function App() {
  const [members, setMembers] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState({fullName: '', email: '', role: ''});
  
  const addMem = memObj => {
    if(!members.find(member => member.fullName === memObj.fullName)) {
      setMembers([...members, {...memObj, key: Date.now() }])
    } else {
      alert('Member already exists')
    }
  };

  const editMember = mem => {
    const newInfo = members.map(member => {
      if(member.key === mem.key) {
        member = mem
      }
      return member;
    })
    setMembers([...newInfo]);
    setMemberToEdit({fullName: '', email: '', role: ''})    
  }

  return (
    <div className="App">
      <h1>Members Directory</h1>
      <Form addMem={addMem} memberToEdit={memberToEdit} edit={editMember} />
      <div className='teams-container'>
        <div>
          <h2>Blue Team</h2>
          {members.map(member => {
            if(member.team == 'blue') {
              return <Member key={member.key} member={member} editMem={setMemberToEdit} />
            }
          })}    
        </div>
        <div>
          <h2>Red Team</h2>
            {members.map(member => {
            if(member.team == 'red') {
              return <Member key={member.key} member={member} editMem={setMemberToEdit} />
            }
          })}  
        </div>
      </div>       
    </div>
  );
}

export default App;
