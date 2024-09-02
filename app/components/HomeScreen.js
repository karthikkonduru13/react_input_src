import React from "react"
import ReactDOM from "react-dom/client"
import Axios from "axios"
import { Link } from "react-router-dom"
const useState = React.useState
import { API_BASE_URL } from "./param.js" // Adjust the path as needed

function HomeScreen() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  //The below is for the Error Message.
  const [firstNameError, setFirstNameError] = useState("")
  const [lastNameError, setLastNameError] = useState("")
  const [userNameError, setUserNameError] = useState("")
  const [passwordError, setPasswordError] = useState("")

  function RegisterFunction(event) {
    event.preventDefault()

    // Client-side validation
    if (!firstName.trim()) {
      setFirstNameError("First name cannot be blank")
      return
    } else {
      setFirstNameError("")
    }

    if (!lastName.trim()) {
      setLastNameError("First name cannot be blank")
      return
    } else {
      setLastNameError("")
    }

    if (!userName.trim()) {
      setUserNameError("First name cannot be blank")
      return
    } else {
      setUserNameError("")
    }

    if (!password.trim()) {
      setPasswordError("First name cannot be blank")
      return
    } else {
      setPasswordError("")
    }

    alert(firstName + lastName + userName + password)

    Axios.post(`${API_BASE_URL}/register_user_route`, {
      varLastName: firstName,
      varFirstName: lastName,
      varUserName: userName,
      varPassword: password
    })
      .then(response => {
        setFirstName("")
        setLastName("")
        setUserName("")
        setPassword("")
        alert("The registration is done successfully !!")
      })
      .catch(error => {
        alert(error)
        console.error("Error occurred:", error)
      })
  }
  return (
    <>
      <div className="container13 background-color-header margin_10px">
        <h2>Registration Form</h2>
        <form onSubmit={RegisterFunction}>
          <div className="container13 background-color-body margin_10px">
            <div className="row">
              <div className="col-25">
                <label htmlFor="fname">First Name</label>
              </div>
              <div className="col-75">
                <input value={firstName} onChange={event => setFirstName(event.target.value)} type="text" id="fname" name="firstname" placeholder="Your name.." />
                {firstNameError && <p style={{ color: "red" }}>{firstNameError}</p>}
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="lname">Last Name</label>
              </div>
              <div className="col-75">
                <input value={lastName} onChange={event => setLastName(event.target.value)} type="text" id="lname" name="lastname" placeholder="Your last name.." />
                {lastNameError && <p style={{ color: "red" }}>{lastNameError}</p>}
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="lname">User Name</label>
              </div>
              <div className="col-75">
                <input value={userName} onChange={event => setUserName(event.target.value)} type="text" id="lname" name="lastname" placeholder="User Name.." />
                {userNameError && <p style={{ color: "red" }}>{userNameError}</p>}
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="lname">Password</label>
              </div>
              <div className="col-75">
                <input value={password} onChange={event => setPassword(event.target.value)} type="password" id="password" name="lastname" placeholder="Password.." />
                {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
              </div>
            </div>
            <div className="row">
              <input type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default HomeScreen
