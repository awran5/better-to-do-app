import React from 'react'
import TaskListContextProvider from '../contexts/TaskListContext'
import TaskList from './TaskList'
import TaskForm from './TaskForm'
import Footer from './Footer'

import '../App.css'
import Header from './Header'

const App = () => {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <div className="main">
            <Header />
            <TaskForm />
            <TaskList />
          </div>
          <Footer />
        </div>
      </div>
    </TaskListContextProvider>
  )
}

export default App
