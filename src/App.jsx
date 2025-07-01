import Navbar from "./components/Navbar"
import "./App.css"
import { BrowserRouter } from "react-router-dom"
import Dashboard from "./components/pages/Dashboard"
function App() {
  return (
    <BrowserRouter>
      <div className="bg-gradient-to-tr from-gray-900 via-gray-950 to-gray-900 min-h-screen">
        <Navbar />
        <Dashboard />
      </div>
    </BrowserRouter>
  )
}

export default App
