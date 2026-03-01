import { Link, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import About from "./components/About";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/about" element={<About />}>About</Route>
        <Route path="/profile" element={<Profile />}>Profile</Route>
      </Routes>
    </div>
  )
}

export default App;