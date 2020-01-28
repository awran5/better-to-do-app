import React, { useContext } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'

const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskListContext)
  return (
    <li className="list-item">
      <span>{task.title} </span>
      <div>
        <button className="btn-edit task-btn" onClick={() => findItem(task.id)}>
          <svg fill="#eee" className="icon" viewBox="0 0 24 24">
            <path d="M20.719 7.031l-1.828 1.828-3.75-3.75 1.828-1.828q0.281-0.281 0.703-0.281t0.703 0.281l2.344 2.344q0.281 0.281 0.281 0.703t-0.281 0.703zM3 17.25l11.063-11.063 3.75 3.75-11.063 11.063h-3.75v-3.75z" />
          </svg>
        </button>
        <button className="btn-delete task-btn" onClick={() => removeTask(task.id)}>
          <svg fill="#eee" className="icon" viewBox="0 0 24 24">
            <path d="M18.984 3.984v2.016h-13.969v-2.016h3.469l1.031-0.984h4.969l1.031 0.984h3.469zM6 18.984v-12h12v12q0 0.797-0.609 1.406t-1.406 0.609h-7.969q-0.797 0-1.406-0.609t-0.609-1.406z" />
          </svg>
        </button>
      </div>
    </li>
  )
}

export default Task
