import React from 'react';
import './member.css'

const Member = props => {

  return(
    <div className={`mem-card ${props.member.team}`}>
      <h3>{props.member.fullName}</h3>
      <p>{props.member.email}</p>
      <p>{props.member.role}</p>
      <button onClick={() => props.editMem(props.member)}>Edit</button>
    </div>
  )
}

export default Member;