import React from 'react'
import './App.css'
import ContextProvider from './Context'
import Title from './components/Title'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import Footer from './components/Footer'

function App() {
  return (
    <ContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <div className="main">
            <Title />
            <TaskForm />
            <TaskList />
          </div>
          <Footer />
        </div>
      </div>
    </ContextProvider>
  )
}

export default App
