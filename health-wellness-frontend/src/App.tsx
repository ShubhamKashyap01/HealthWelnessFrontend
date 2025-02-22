import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { RootState } from "./store/store";
import './App.css'

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
// import { useSelector } from "react-redux";

function App() {
  // const [count, setCount] = useState(0)
  // const user = useSelector((state: RootState) => state.auth.user);
  return (
    <>
      <Router>
        {/* <nav>
          <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link>
        </nav> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
