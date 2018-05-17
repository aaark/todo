import React from 'react';

import TaskItem from './task_item';

const TaskLists = (props) => {

  return(
    <div className='tasks-list'>
      <table>
        <thead>
          <tr>
            <td>
              #
            </td>
            <td>
              Task
            </td>
            <td>
              Action
            </td>
          </tr>
        </thead>
        <tbody>
          {
            props.tasks.map((task, index) => {
              return <TaskItem
                task={ task }
                number = { index + 1 }
                key = { task.title + index }
                removeTask = { props.removeTask }
              />
            })
          }
        </tbody>
      </table>
    </div>
  );

}

export default TaskLists;