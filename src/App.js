import React from 'react'
import { Router, Link } from '@reach/router'
import './App.css'
import Home from './Home'
import Dashboard from './Dashboard'

function App() {
  return (
    <div className="App">
      <h1>Reach Router Tutorial</h1>
      <nav>
        <Link to="/">Home</Link> <Link to="dashboard">Dashboard</Link>
      </nav>
      <Router>
        <Home path="/" />
        <Dashboard path="/dashboard" />
      </Router>
    </div>
  )
}

export default App
