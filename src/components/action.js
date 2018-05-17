import React from 'react';

const Action = (props) => {

  return (
    <div>
      <button onClick= {() => props.resetList()} className='action-btn reset'> Reset </button>
      <button onClick= {() => props.clearList()} className='action-btn clear'> Clear </button>
    </div>
  )
}

export default  Action;
