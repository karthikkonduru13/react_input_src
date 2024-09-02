import React from "react"
import ReactDOM from "react-dom/client"
import Axios from "axios"
import { Link } from "react-router-dom"
import { API_BASE_URL } from "./param.js" // Adjust the path as needed

import HomeScreen from "./HomeScreen"

const useState = React.useState

function LoggedOutForm(props) {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  //The below is for the Error Message.
  const [userNameError, setUserNameError] = useState()
  const [passwordError, setPasswordError] = useState()

  async function TheLoginFunction(event) {
    event.preventDefault()
    //  alert(userName + password)

    // Client-side validation
    if (!userName.trim()) {
      setUserNameError("The user name cannot be blank.")
      return
    } else {
      setUserNameError("")
    }

    if (!password.trim()) {
      setPasswordError("The password cannot be blank.")
      return
    } else {
      setPasswordError("")
    }

    const theResponse = await Axios.post(`${API_BASE_URL}/login_user_route`, { theUserName: userName, thePassword: password })
    if (theResponse.data.login_pwd_matching == "true") {
      localStorage.setItem("localLoggedIn", theResponse.data.login_pwd_matching)
      props.setLoggedIn(true)
    } else {
      alert("wrong login credientials")
    }
  }
  return (
    <>
      <form onSubmit={TheLoginFunction}>
        <div className="login_container13 container background-color-header margin_bottom_40px">
          <h2>Welcome to the State Bank of India Website</h2>
          <input value={userName} onChange={event => setUserName(event.target.value)} className="input-field" type="text" placeholder="Username" name="usrnm" />
          {userNameError && <p style={{ color: "red" }}>{userNameError}</p>}
          <input value={password} onChange={event => setPassword(event.target.value)} className="input-field" type="password" placeholder="Password" name="psw" />
          {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
          <button type="submit" className="btn">
            Login
          </button>
        </div>
      </form>
      <HomeScreen />
    </>
  )
}

export default LoggedOutForm
