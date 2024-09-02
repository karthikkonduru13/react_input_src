import React from "react"
import ReactDOM from "react-dom/client"
import Axios from "axios"

import { Link } from "react-router-dom"

const useState = React.useState

function LoggedInMenu() {
  return (
    <>
      <div id="tabs">
        <ul>
          <li>
            <Link to="/">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/Loan">
              <span>Apply Loan</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>Open Account</span>
            </Link>
          </li>
          <li>
            <Link to="/Deposits">
              <span>Open Deposit</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default LoggedInMenu
