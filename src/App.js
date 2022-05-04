import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage.jsx"
import Welcome from "./components/Welcome.js"

export default function App() {
  const [access, setAccess] = useState(false)
  useEffect(() => {
    checkCookie()
  }, [])

  const checkCookie = () => {
    if (document.cookie) setAccess(true)
  }
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Welcome />} />
        <Route path="/homepage" exact element={<Homepage />} />
      </Routes>
    </Router>
  )
}
