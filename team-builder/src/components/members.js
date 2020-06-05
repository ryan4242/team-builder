import React from 'react';
import Member from './member'

const Members = ({members}) => {
  return(
    <div className='members-container'>
      {members.map(member => <Member member={member} />)}
    </div>
  )
}

export default Members;