import React from 'react'
import { Router, Link, navigate } from '@reach/router'
import './App.css'
import Home from './Home'
import Dashboard from './Dashboard'
import Invoices from './Invoices'
import Invoice from './Invoice'
import InvoicesIndex from './InvoicesIndex'
import NotFound from './NotFound'

function App() {
  return (
    <div className="App">
      <h1>Reach Router Tutorial</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="dashboard">Dashboard</Link>
        <Link to="invoices">Invoices</Link>
      </nav>
      <Router>
        <NotFound default></NotFound>
        <Invoices path="invoices">
          <InvoicesIndex path="/"></InvoicesIndex>
          <Invoice path=":invoiceId" />
        </Invoices>
        <Home path="/" />
        <Dashboard path="/dashboard" />
      </Router>
    </div>
  )
}

export default App
