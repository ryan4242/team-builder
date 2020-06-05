import React, {useState} from 'react';

const Form = props => {

  const [newMem, setNewMem] = useState({fullName: '', email: '', role: ''})

  const handleChange = event => {
    setNewMem({...newMem, [event.target.name]: event.target.value})
  }

  const submitForm = e => {
    e.preventDefault();
    props.addMem(newMem);
    setNewMem({fullName: '', email: '', role: ''});
  }
 
  return(
    <div className='form-container'>
      <form onSubmit={submitForm}>
        <label htmlFor='name'>Name:</label>
        <input id='name' type='text' placeholder='first and last name' onChange={handleChange} name='fullName' value={newMem.fullName} />
        <label htmlFor='email'>E-mail:</label>
        <input id='email' type='email' placeholder='email' onChange={handleChange} name='email' value={newMem.email} />
        <label htmlFor='role'>Position:</label>
        <input id='role' type='text' placeholder='Position title' onChange={handleChange} name='role' value={newMem.role} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form;