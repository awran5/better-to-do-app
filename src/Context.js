import React, { createContext, useState, useEffect } from 'react'
import uuidv1 from 'uuid/v1'

export const TaskListContext = createContext()

const TaskListContextProvider = props => {
  const initialState = JSON.parse(localStorage.getItem('tasks')) || []

  const [ tasks, setTasks ] = useState(initialState)
  const [ editItem, setEditItem ] = useState(null)

  useEffect(
    () => {
      localStorage.setItem('tasks', JSON.stringify(tasks))
    },
    [ tasks ]
  )

  // Add tasks
  const addTask = title => setTasks([ ...tasks, { title, id: uuidv1(), complete: false } ])

  // Remove tasks
  const removeTask = id => setTasks(tasks.filter(task => task.id !== id))

  // Find task
  const findItem = id => setEditItem(tasks.find(task => task.id === id))

  // Edit task
  const editTask = (title, id) => {
    const edited = tasks.map(task => (task.id === id ? { ...task, title } : task))
    setTasks(edited)

    setEditItem(null)
  }

  const completeTask = (complete, id) => {
    const completed = tasks.map(task => (task.id === id ? { ...task, complete } : task))
    setTasks(completed)
  }

  // Clear all tasks
  const clearList = () => setTasks([])

  return (
    <TaskListContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        findItem,
        editItem,
        editTask,
        completeTask,
        clearList
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  )
}

export default TaskListContextProvider
