import React, { useContext } from 'react'
import { TaskListContext } from '../Context'
import Task from './Task'

const TaskList = () => {
  const { tasks } = useContext(TaskListContext)

  return (
    <div className="list">
      {tasks.length ? (
        <ul>{tasks.map(task => <Task task={task} key={task.id} />)}</ul>
      ) : (
        <div className="no-tasks">No tasks!</div>
      )}
    </div>
  )
}

export default TaskList
