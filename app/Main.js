import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Axios from "axios"
import LoggedOutForm from "./components/LoggedOutForm"
import LoggedInForm from "./components/LoggedInForm"
import HomeScreen from "./components/HomeScreen"
import LoggedInMenu from "./components/LoggedInMenu"
import AccountOpening from "./components/AccountOpening"
import ApplyLoan from "./components/ApplyLoan"
import ApplyDeposits from "./components/ApplyDeposits"

const useState = React.useState
const useEffect = React.useEffect

function OurApp() {
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("localLoggedIn")))
  //  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <>
      <BrowserRouter>
        {loggedIn ? <LoggedInForm setLoggedIn={setLoggedIn} /> : <LoggedOutForm setLoggedIn={setLoggedIn} />}
        <Routes>
          <Route path="/" element={loggedIn ? <AccountOpening /> : ""} />
          <Route path="/Loan" element={loggedIn ? <ApplyLoan /> : ""} />
          <Route path="/Deposits" element={loggedIn ? <ApplyDeposits /> : ""} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#app"))
root.render(<OurApp />)
