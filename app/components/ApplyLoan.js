import React from "react"
import ReactDOM from "react-dom/client"
import Axios from "axios"

import { Link } from "react-router-dom"
import LoggedInMenu from "./LoggedInMenu"
import { API_BASE_URL } from "./param.js" // Adjust the path as needed

const useState = React.useState

function ApplyLoan() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [loanAmt, setLoanAmt] = useState("")
  const [addressProof, setAddressProof] = useState("")
  const [tenor, setTenor] = useState("")

  //The below is for the Error Message.
  const [firstNameError, setFirstNameError] = useState("")
  const [lastNameError, setLastNameError] = useState("")
  const [loanAmtError, setLoanAmtError] = useState("")
  const [addressProofError, setAddressProofError] = useState("")
  const [tenorError, setTenorError] = useState("")

  function ApplyLoanFunction(event) {
    event.preventDefault()

    // Client-side validation
    if (!firstName.trim()) {
      setFirstNameError("First name cannot be blank")
      return
    } else {
      setFirstNameError("")
    }

    if (!lastName.trim()) {
      setLastNameError("Last name cannot be blank")
      return
    } else {
      setLastNameError("")
    }

    if (!loanAmt.trim()) {
      setLoanAmtError("Loan Amount cannot be blank")
      return
    } else {
      setLoanAmtError("")
    }

    if (!addressProof.trim()) {
      setAddressProofError("Address Proof cannot be blank")
      return
    } else {
      setAddressProofError("")
    }

    if (!tenor.trim()) {
      setTenorError("Tenor cannot be blank")
      return
    } else {
      setTenorError("")
    }

    Axios.post(`${API_BASE_URL}/loan_open_route`, {
      firstName: firstName,
      lastName: lastName,
      loanAmt: loanAmt,
      addressProof: addressProof,
      tenor: tenor
    })
      .then(response => {
        setFirstName("")
        setLastName("")
        setLoanAmt("")
        setAddressProof("")
        setTenor("")

        alert("The loan application is done successfully !!")
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
        <form onSubmit={ApplyLoanFunction}>
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
              <label htmlFor="Loan">Loan Amount</label>
            </div>
            <div className="col-75">
              <input value={loanAmt} onChange={event => setLoanAmt(event.target.value)} type="text" id="Loanid" name="Loan" placeholder="Loan Amount.." />
              {loanAmtError && <p style={{ color: "red" }}>{loanAmtError}</p>}
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="address">Address Proof</label>
            </div>
            <div className="col-75">
              <input value={addressProof} onChange={event => setAddressProof(event.target.value)} type="text" id="Loanid" name="Loan" placeholder="Address Proof.." />
              {addressProofError && <p style={{ color: "red" }}>{addressProofError}</p>}
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="tenor">Tenor</label>
            </div>
            <div className="col-75">
              <select value={tenor} onChange={event => setTenor(event.target.value)} id="tenorid" name="tenor" defaultValue="">
                <option value="" disabled hidden>
                  Select the Tenor
                </option>
                <option value="2-years">2-Years</option>
                <option value="3-years">3-Years</option>
                <option value="4-years">4-Years</option>
              </select>
              {tenorError && <p style={{ color: "red" }}>{tenorError}</p>}
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

export default ApplyLoan
