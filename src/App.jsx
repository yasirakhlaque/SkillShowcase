import Navbar from "./components/Navbar"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./components/pages/Dashboard"
import Profile from "./components/pages/Profile"

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gradient-to-tr from-gray-900 via-gray-950 to-gray-900 min-h-screen app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
