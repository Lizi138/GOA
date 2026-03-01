import {Route, Routes} from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Info from "./pages/Info";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Info" element={<Info />} />
      </Routes>
    </div>
  )
}

export default App;