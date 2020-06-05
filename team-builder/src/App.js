import React, {useState} from 'react';
import './App.css';
import Form from './components/form/form';
import Members from './components/members/members';

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

//    const newMemList = members.map(member => {
//      if(member.key === memberToEdit.key) {
//        member = memberToEdit;
//      }
//    })
    
  }

  return (
    <div className="App">
        <h1>Members Directory</h1>
        <Form addMem={addMem} memberToEdit={memberToEdit} edit={editMember} />
        <Members members={members} editMem={setMemberToEdit} />
    </div>
  );
}

export default App;
