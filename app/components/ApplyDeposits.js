import React from "react"
import ReactDOM from "react-dom/client"
import Axios from "axios"

import { Link } from "react-router-dom"
import LoggedInMenu from "./LoggedInMenu"
import { API_BASE_URL } from "./param.js" // Adjust the path as needed

const useState = React.useState

function ApplyDeposits() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [depositAmt, setDepositAmt] = useState("")
  const [tenor, setTenor] = useState("")
  const [depositType, setDepositType] = useState("")

  //The below is for the Error Message.
  const [firstNameError, setFirstNameError] = useState("")
  const [lastNameError, setLastNameError] = useState("")
  const [depositAmtError, setDepositAmtError] = useState("")
  const [tenorError, setTenorError] = useState("")
  const [depositTypeError, setDepositTypeError] = useState("")

  function ApplyDepositsFunction(event) {
    event.preventDefault()

    // Client-side validation
    if (!firstName.trim()) {
      setFirstNameError("First name cannot be blank")
      return
    } else {
      setFirstNameError("")
    }

    // Client-side validation
    if (!lastName.trim()) {
      setLastNameError("Last name cannot be blank")
      return
    } else {
      setLastNameError("")
    }

    // Client-side validation
    if (!depositAmt.trim()) {
      setDepositAmtError("Deposit Amount cannot be blank")
      return
    } else {
      setDepositAmtError("")
    }

    // Client-side validation
    if (!tenor.trim()) {
      setTenorError("Tenor cannot be blank")
      return
    } else {
      setTenorError("")
    }

    // Client-side validation
    if (!depositType.trim()) {
      setDepositTypeError("Deposit Type cannot be blank")
      return
    } else {
      setDepositTypeError("")
    }
    alert(firstName + lastName + depositAmt + tenor + depositType)

    Axios.post(`${API_BASE_URL}/deposit_open_route`, {
      firstName: firstName,
      lastName: lastName,
      depositAmt: depositAmt,
      tenor: tenor,
      depositType: depositType
    })
      .then(response => {
        setFirstName("")
        setLastName("")
        setDepositAmt("")
        setTenor("")
        setDepositType("")

        alert("The deposit application is done successfully !!")
      })
      .catch(error => {
        alert(error)
        console.error("Error occurred:", error)
      })
  }
  return (
    <>
      <LoggedInMenu />
      <div className="container background-color-body margin_10px">
        <form onSubmit={ApplyDepositsFunction}>
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
              <label htmlFor="deposit">Deposit Amount</label>
            </div>
            <div className="col-75">
              <input value={depositAmt} onChange={event => setDepositAmt(event.target.value)} type="text" id="depositid" name="deposit" placeholder="Deposit Amount.." />
              {depositAmtError && <p style={{ color: "red" }}>{depositAmtError}</p>}
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="tenor">Tenor - Days</label>
            </div>
            <div className="col-75">
              <input value={tenor} onChange={event => setTenor(event.target.value)} type="text" id="tenorid" name="tenor" placeholder="Tenor.." />
              {tenorError && <p style={{ color: "red" }}>{tenorError}</p>}
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="deposittype">Deposit Type</label>
            </div>
            <div className="col-75">
              <select value={depositType} onChange={event => setDepositType(event.target.value)} id="depositid" name="accounttype" defaultValue="">
                <option value="" disabled hidden>
                  Select the Deposit Type
                </option>
                <option value="fixed">Fixed deposit account</option>
                <option value="recurring">Recurring deposit account</option>
              </select>
              {depositTypeError && <p style={{ color: "red" }}>{depositTypeError}</p>}
            </div>
          </div>

          <div className="row">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </>
  )
}

export default ApplyDeposits
