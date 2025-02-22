import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyProfile from "./pages/MyProfile/MyProfile";
import WellnessGoals from "./pages/WellnessGoals/WellnessGoals";
import Messages from "./pages/Messages/Messages";
import Logout from "./pages/Logout/Logout";
function App() {
  return (
    <>
      <Router>
        {/* <nav>
          <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link>
        </nav> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/goals" element={<WellnessGoals />} />
         
        </Routes>
      </Router>
    </>
  )
}

export default App
