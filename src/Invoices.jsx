import React from 'react'
import { Link } from '@reach/router'

const Invoices = props => (
  <div>
    <h2>Invoices</h2>
    <ul>
      <li>
        <Link to="/invoices/123">Invoice 123</Link>
      </li>
      <li>
        <Link to="/invoices/abc">Invoice ABC</Link>
      </li>
    </ul>

    {props.children}
  </div>
)

export default Invoices
