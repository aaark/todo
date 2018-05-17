import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const TaskItem = (props) => {

  return (
    <tr key={props.task.title}>
      <td>{props.number}</td>
      <td>{props.task.title}</td>
      <td>
        <button onClick={ () => props.removeTask(props.task) }>
          <i className='fa fa-times' />
        </button>
      </td>
    </tr>
  );
}

export default TaskItem;