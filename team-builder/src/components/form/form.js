import React, {useState, useEffect} from 'react';
import './form.css'

const Form = props => {

  const [newMem, setNewMem] = useState({fullName: '', email: '', role: '', team: ''})

  useEffect(() => {
    setNewMem(props.memberToEdit)
  }, [props.memberToEdit]) 

  const handleChange = event => {
    setNewMem({...newMem, [event.target.name]: event.target.value})
  }
  
  const submitForm = e => {
    console.log(props.memberToEdit)
    e.preventDefault();
    if(props.memberToEdit.fullName === '') {
      props.addMem(newMem);
    } else {
      props.edit(newMem)
    }
    setNewMem({fullName: '', email: '', role: '', team: ''});
  };
 
  return(
    <div className='form-container'>
      <form onSubmit={submitForm}>
        <label htmlFor='name'>Name:</label>
        <input id='name' type='text' placeholder='first and last name' onChange={handleChange} name='fullName' value={newMem.fullName} required />
        <label htmlFor='email'>E-mail:</label>
        <input id='email' type='email' placeholder='email' onChange={handleChange} name='email' value={newMem.email} required />
        <label htmlFor='role'>Position:</label>
        <input id='role' type='text' placeholder='Position title' onChange={handleChange} name='role' value={newMem.role} required />
        <p>Select a team name:</p>
        <div className='radio-buttons'>
          <div>
            <label htmlFor='red-team'>RedTeam</label>
            <input id='red-team' type='radio' onChange={handleChange} name='team' value='red' required />
          </div>
          <div>
            <label htmlFor='blue-team'>BlueTeam</label>
            <input id='blue-team' type='radio' onChange={handleChange} name='team' value='blue' required />
          </div>
        </div>  
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form;