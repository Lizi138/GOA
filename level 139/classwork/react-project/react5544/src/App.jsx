import { Route, Routes } from "react-router"
import Home from "./components/Home"
import Contact from "./components/Contact"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  )
}
export default App;