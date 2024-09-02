import React from "react"
import ReactDOM from "react-dom/client"
import Axios from "axios"
import { Link } from "react-router-dom"
import HomeScreen from "./HomeScreen"
import { useNavigate } from 'react-router-dom';

function LoggedInForm(props) {
  const navigate = useNavigate(); // Initialize navigate

  function TheLogoutFunction(event) {
    event.preventDefault()
    localStorage.removeItem("localLoggedIn")
    props.setLoggedIn(false)
    navigate("/")

    //    alert("TheLogoutFunction")
  }

  return (
    <>
      <form>
        <div className="login_container13 container background-color-header margin_bottom_40px">
          <h2>Welcome to the State Bank of India Website</h2>
          <button onClick={TheLogoutFunction} type="submit" className="btn">
            Log Out
          </button>
        </div>
      </form>
    </>
  )
}

export default LoggedInForm
