import React from 'react';
import Member from '../member/member'
import './members.css';

const Members = props => {
  return(
    <div className='members-container'>
      {props.members.map(member => <Member member={member} editMem={props.editMem} />)}
    </div>
  )
}

export default Members;