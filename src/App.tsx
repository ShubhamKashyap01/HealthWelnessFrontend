import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyProfile from "./pages/MyProfile/MyProfile";

function App() {
 
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<MyProfile />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
