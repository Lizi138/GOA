import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import Comp2 from "./components/Comp2";
import Comp from "./components/Comp";
import Comp3 from "./components/Comp3";

const hello = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<Comp />} />
    <Route path="/Comp2" element={<Comp2 />} /> 
    <Route path="/Comp3" element={<Comp3 />} />
  </>
));

const App = () => {
  return (
    <RouterProvider router={hello} />
  )
}

export default App;