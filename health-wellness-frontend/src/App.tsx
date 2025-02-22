import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { RootState } from "./store/store";
import './App.css'
import { Button } from "./components/ui/button";;

function App() {
  // const [count, setCount] = useState(0)
  // const user = useSelector((state: RootState) => state.auth.user);
  return (
    <>
      <Button
        onClick={()=>{}}
      >
        Set User
      </Button>
      <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link>
      </nav>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
    </>
  )
}

export default App
