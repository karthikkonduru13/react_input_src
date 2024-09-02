import React from "react"
import ReactDOM from "react-dom/client"
import Axios from "axios"

import { Link } from "react-router-dom"
import LoggedInMenu from "./LoggedInMenu"
import { API_BASE_URL } from "./param.js" // Adjust the path as needed

const useState = React.useState

function AccountOpening() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [addressProof, setAddressProof] = useState("")
  const [street, setStreet] = useState("")
  const [city, setCity] = useState("")
  const [accountType, setAccountType] = useState("")
  const [addProofImage, setAddProofImage] = useState("")

  //The below is for the Error Message.
  const [firstNameError, setFirstNameError] = useState("")
  const [lastNameError, setLastNameError] = useState("")
  const [addressProofError, setAddressProofError] = useState("")
  const [streetError, setStreetError] = useState("")
  const [cityError, setCityError] = useState("")
  const [accountTypeError, setAccountTypeError] = useState("")
  
  async function AccountOpenFunction(event) {
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

    if (!addressProof.trim()) {
      setAddressProofError("Address Proof cannot be blank")
      return
    } else {
      setAddressProofError("")
    }

    if (!street.trim()) {
      setStreetError("Street name cannot be blank")
      return
    } else {
      setStreetError("")
    }

    if (!city.trim()) {
      setCityError("City name cannot be blank")
      return
    } else {
      setCityError("")
    }

    if (!accountType.trim()) {
      setAccountTypeError("Account Type cannot be blank")
      return
    } else {
      setAccountTypeError("")
    }

    //    alert("AccountOpenFunction")
    alert(firstName + lastName + addressProof + street + city + accountType)

    const jsonData = {
      firstName,
      lastName,
      addressProof,
      street,
      city,
      accountType
    }

    const formData = new FormData()
    formData.append("data1", JSON.stringify(jsonData))
    formData.append("image1", addProofImage)


    await Axios.post(`${API_BASE_URL}/account_open_route`, formData)
      .then(response => {
        setFirstName("")
        setLastName("")
        setAddressProof("")
        setStreet("")
        setCity("")
        setAccountType("")

        alert("The account opening is done successfully !!")
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
        <form onSubmit={AccountOpenFunction}>
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
              <label htmlFor="lname">Address Proof</label>
            </div>
            <div className="col-75">
              <select value={addressProof} onChange={event => setAddressProof(event.target.value)} id="addressproofid" name="addressproof" defaultValue="">
                <option value="" disabled hidden>
                  Select the address Proof
                </option>
                <option value="passport">Passport</option>
                <option value="driving_licence">Driving Licence</option>
                <option value="aadhaar_card">Aadhaar Card</option>
                <option value="voter_identity_card">Voter's Identity Card</option>
                <option value="job_card_nrega">Job card by NREGA</option>
                <option value="letter_issued">Letter issued by the National Population Register</option>
              </select>
              {addressProofError && <p style={{ color: "red" }}>{addressProofError}</p>}
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="addressproofimage">Address Proof Image</label>
            </div>
            <div className="col-75">
              <input onChange={event => setAddProofImage(event.target.files[0])} type="file" name="files[]" id="files" placeholder="Address Proof Image.." />
              <br />
              <br />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="address">Street</label>
            </div>
            <div className="col-75">
              <input value={street} onChange={event => setStreet(event.target.value)} type="text" id="streetid" name="street" placeholder="Street.." />
              {streetError && <p style={{ color: "red" }}>{streetError}</p>}
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="address">City</label>
            </div>
            <div className="col-75">
              <input value={city} onChange={event => setCity(event.target.value)} type="text" id="cityid" name="city" placeholder="City.." />
              {cityError && <p style={{ color: "red" }}>{cityError}</p>}
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="accounttype">Account Type</label>
            </div>
            <div className="col-75">
              <select value={accountType} onChange={event => setAccountType(event.target.value)} id="accounttypeid" name="accounttype" defaultValue="">
                <option value="" disabled hidden>
                  Select the Account Type
                </option>
                <option value="savings">Savings Account</option>
                <option value="current">Current Account</option>
              </select>
              {accountTypeError && <p style={{ color: "red" }}>{accountTypeError}</p>}
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

export default AccountOpening
