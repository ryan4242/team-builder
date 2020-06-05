import React from 'react';

const Member = ({member}) => {
  return(
    <div className='mem-card'>
      <h3>{member.fullName}</h3>
      <p>{member.email}</p>
      <p>{member.role}</p>
    </div>
  )
}

export default Member;